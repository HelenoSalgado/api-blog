import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CategoryService } from './category.service';
import { msg } from 'src/constants/msgPost';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Controller('categories')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategory: CreateCategoryDto){
    return await this.categoryService.create(createCategory);
  }

  @Get()
  async findAll() {
    const categories = await this.categoryService.findAll();
    if(!categories) throw new NotFoundException(msg.postsNotExist);
    return categories;
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {  
      const category = await this.categoryService.findOne(name);
      if(!category) throw new NotFoundException(msg.postNotExist);
      return category;
  }

  @Put(':id')
  async update( @Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto){
    await this.categoryService.update(id, updateCategoryDto);
    return { message: msg.postUpdated, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    await this.categoryService.remove(id);
    return { message: msg.postDeletedSucess, statusCode: 200 };
  }

}
