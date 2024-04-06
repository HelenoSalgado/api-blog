import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { PostService } from './post.service';
import { msg } from 'src/constants/msgPost';
import { CreatePostDto } from './post.dto';
import { UpdatePostDto } from './post.dto';

@Controller('posts')
export class PostController {

  constructor(private readonly postsService: PostService) {}

  @Post()
  async create(@Body() createPost: CreatePostDto){
    return await this.postsService.create(createPost);
  }

  @Get()
  async findAll() {
    const posts = await this.postsService.findAll();

    //if(posts.length == 0) throw new NotFoundException(msg.postsNotExist);
  
    return posts;
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
      const post = await this.postsService.findOne(slug);
      if(!post) throw new NotFoundException(msg.postNotExist);
      return post;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePost: UpdatePostDto){
    await this.postsService.update(id, updatePost);
    return { message: msg.postUpdated, statusCode: 200 };
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    await this.postsService.remove(id);
    return { message: msg.postDeletedSucess, statusCode: 200 };
    
  }

}
