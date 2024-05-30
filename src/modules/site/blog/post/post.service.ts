import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import type { CreatePostDto, UpdatePostDto } from './post.dto';
import { createPaginator } from 'prisma-pagination';

@Injectable()
export class PostService {
  constructor(
    private repository: PostRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createPost: CreatePostDto){
    const existPost = await this.repository.findOne(createPost.title);
    if(existPost) throw new ConflictException('Artigo já existe: crie artigo com um título diferente');
    this.cacheManager.del('getPostsAll');
    return await this.repository.create(createPost);
  }

  async findAll(page: number, perPage: number){
    //const postsInCache = await this.cacheManager.get('getPostsAll');
    //if(postsInCache == 0) throw new NotFoundException('Nenhum post encontrado');
    //if(postsInCache) return postsInCache;
    const posts = await this.repository.findAll(page, perPage);
    //await this.cacheManager.set('getPostsAll', posts, 0);
    return posts;
  }

  async findOne(slug: string){
    const post = await this.repository.findOne(slug);
    if(!post) throw new NotFoundException('Nenhum post encontrado');
    return post;
  }

  async update(id: number, updatePost: UpdatePostDto){
    this.cacheManager.del('getPostsAll');
    const filterIdsCategories = updatePost.categories.map(({id}) => {
      return {
        id
      }
    });
    updatePost.categories = filterIdsCategories;
    return await this.repository.update(Number(id), updatePost);
  }

  async published(ids: number[], published: boolean){
    await this.cacheManager.del('getPostsAll');
    return await this.repository.published(ids, published);
  }

  async remove(id: number){
    this.cacheManager.del('getPostsAll');
    return await this.repository.remove(Number(id));
  }

}