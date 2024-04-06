import { Inject, Injectable } from '@nestjs/common';
import { CollectionRepository } from './collection.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    private repository: CollectionRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createCollection: CreateCollectionDto){
    this.cacheManager.del('getCollectionAll');
    return await this.repository.create(createCollection);
  }

  async findAll(){
    const postsInCache = await this.cacheManager.get('getCollectionAll');
    if(postsInCache) return postsInCache;
    const posts = await this.repository.findAll();
    await this.cacheManager.set('getCollectionAll', posts, 0);
    return posts;
  }

  async findOne(slug: string){
    return await this.repository.findOne(slug);
  }

  async update(id: number, updateCollection: UpdateCollectionDto){
    this.cacheManager.del('getPostsAll');
    return await this.repository.update(Number(id), updateCollection);
  }

  async remove(id: number){
    this.cacheManager.del('getPostsAll');
    return await this.repository.remove(Number(id));
  }

}