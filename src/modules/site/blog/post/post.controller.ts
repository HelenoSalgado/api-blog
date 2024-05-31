import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, ParseArrayPipe, HttpCode, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { msg } from 'src/constants/msgPost';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { Public } from 'src/modules/auth/decorators/public.decorator';
//import { ApiPaginatedResponse } from '../../../../decorators/paginated.decorator';
import { PaginatedDto } from '../../../../general.dto/paginated-dto';

@Controller('posts')
export class PostController {

  constructor(private readonly postsService: PostService) {}

  @Post()
  async create(@Body() createPost: CreatePostDto){
    console.log(createPost)
    return await this.postsService.create(createPost);
  }

  @Public()
  @Get()
  //@ApiPaginatedResponse(CreatePostDto)
  async findAll( 
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10):Promise<PaginatedDto<CreatePostDto>>{
    const posts = await this.postsService.findAll(page, perPage);
    if(posts.data.length == 0) throw new NotFoundException(msg.postsNotExist);
    return posts;
  }

  @Public()
  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
      const post = await this.postsService.findOne(slug);
      if(!post) throw new NotFoundException(msg.postNotExist);
      return post;
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: number, @Body() updatePost: UpdatePostDto){
    await this.postsService.update(id, updatePost);
  }

  @Put('published/:ids')
  @HttpCode(204)
  async published(
    @Param('ids', new ParseArrayPipe({
      items: Array<Number>, separator: '[]',
    })) ids: number,
    @Body('published') published: boolean){
    await this.postsService.published(ids[0], published);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number){
    await this.postsService.remove(id);
  }

}
