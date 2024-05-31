import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, ValidationPipe, ParseArrayPipe, HttpCode, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { msg } from 'src/constants/msgPost';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { PaginatedDto } from 'src/general.dto/paginated-dto';

@Controller('categories')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategory: CreateCategoryDto){
    return await this.categoryService.create(createCategory);
  }

  @Public()
  @Get()
  async findAll(
    @Query('page') page: number = 1, 
    @Query('perPage') perPage: number = 10
  ):Promise<PaginatedDto<CreateCategoryDto>> {
    const categories = await this.categoryService.findAll(page, perPage);
    if(categories.data.length == 0) throw new NotFoundException(msg.postsNotExist);
    return categories;
  }

  @Public()
  @Get(':name')
  async findOne(@Param('name') name: string) {  
    const category = await this.categoryService.findOne(name);
    if(!category) throw new NotFoundException(msg.postNotExist);
    return category;
  }

  @Put(':id')
  @HttpCode(204)
  async update( @Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto){
    await this.categoryService.update(id, updateCategoryDto);
  }

  @Put('published/:ids')
  @HttpCode(204)
  async published(
    @Param('ids', new ParseArrayPipe({
      items: Array<Number>, separator: '[]',
    })) ids: number,
    @Body('published') published: boolean){
      await this.categoryService.published(ids[0], published);
  }

  @Delete(':ids')
  @HttpCode(204)
  async remove(@Param('ids', new ParseArrayPipe({
    items: Array<Number>, separator: '[]',
  }
  )) ids: number){
    await this.categoryService.remove(ids[0]);
  }

}
