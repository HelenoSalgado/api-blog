import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { msg } from 'src/constants/msgCollection';
import { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';
import { Public } from 'src/modules/auth/decorators/public.decorator';

@Controller('collection')
export class CollectionController {

  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  async create(@Body() createCollection: CreateCollectionDto){
    return await this.collectionService.create(createCollection);
  }

  @Public()
  @Get()
  async findAll() {
    const posts = await this.collectionService.findAll();
    if(!posts) throw new NotFoundException(msg.collectionNotExist);
    return posts;
  }

  @Public()
  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
      const collection = await this.collectionService.findOne(slug);
      if(!collection) throw new NotFoundException(msg.collectionNotExist);
      return collection;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCollection: UpdateCollectionDto){
    await this.collectionService.update(id, updateCollection);
    return { message: msg.collectionUpdated, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    await this.collectionService.remove(id);
    return { message: msg.collectionDeletedSucess, statusCode: 200 };
  }

}