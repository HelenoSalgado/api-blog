import { ConflictException, HttpException, Inject, Injectable, NotFoundException } from '@nestjs/common';
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
    await this.cacheManager.del('getCategories');
    const existCategory = await this.findOne(createCategory.name);
    if(existCategory) throw new ConflictException('Categoria já existe: crie categoria com um nome diferente');
    return await this.repository.create(createCategory);
  }

  async findAll(page: number, perPage: number){
    //const categoriesInCache = await this.cacheManager.get('getCategories');
    //if(categoriesInCache) return categoriesInCache;
    const categories = await this.repository.findAll(page, perPage);
    //if(!categories.data.length) throw new NotFoundException('Nenhuma categoria encontrada');
    //await this.cacheManager.set('getCategories', categories, 0);
    return categories;
  }

  async findOne(name: string){
    return await this.repository.findOne(name);
  }

  async update(id: number, updateCategory: UpdateCategoryDto){
    await this.cacheManager.del('getCategories');
    return await this.repository.update(Number(id), updateCategory);
  }

  async published(ids: number[], published: boolean){
    await this.cacheManager.del('getCategories');
    return await this.repository.published(ids, published);
  }

  async remove(ids: number[]){
    await this.cacheManager.del('getCategories');
    return await this.repository.remove(ids);
  }
  
}