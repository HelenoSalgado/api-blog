import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import type { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    private repository: CategoryRepository, @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async create(createCategory: CreateCategoryDto){
    this.cacheManager.del('getCategories');
    return await this.repository.create(createCategory);
  }

  async findAll(){
    const categoriesInCache = await this.cacheManager.get('getCategories');
    if(categoriesInCache) return categoriesInCache;
    const categories = await this.repository.findAll();
    await this.cacheManager.set('getCategories', categories, 0);
    return categories;
  }

  async findOne(name: string){
    return await this.repository.findOne(name);
  }

  async update(id: number, updateCategory: UpdateCategoryDto){
    this.cacheManager.del('getCategories');
    return await this.repository.update(Number(id), updateCategory);
  }

  async remove(id: number){
    this.cacheManager.del('getCategories');
    return await this.repository.remove(Number(id));
  }
  
}