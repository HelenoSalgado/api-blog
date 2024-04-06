import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import type { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(
    private repository: PostRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createPost: CreatePostDto){
    this.cacheManager.del('getPostsAll');
    return await this.repository.create(createPost);
  }

  async findAll(){
    const postsInCache = await this.cacheManager.get('getPostsAll');
    if(postsInCache) return postsInCache;
    const posts = await this.repository.findAll();
    await this.cacheManager.set('getPostsAll', posts, 0);
    return posts;
  }

  async findOne(slug: string){
    return await this.repository.findOne(slug);
  }

  async update(id: number, updatePost: UpdatePostDto){
    this.cacheManager.del('getPostsAll');
    return await this.repository.update(Number(id), updatePost);
  }

  async remove(id: number){
    this.cacheManager.del('getPostsAll');
    return await this.repository.remove(Number(id));
  }

}