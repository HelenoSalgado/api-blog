import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  create({ 
    title, description, imgUrl, content, slug, 
    afterPost, beforePost, published, profileId 
  }: CreatePostDto){
    return this.prisma.post.create({ 
      data: {
        title, 
        description, 
        imgUrl,
        content, 
        slug,
        afterPost,
        beforePost,
        published,
        profile: {
          connect: {
            id: profileId
          }
        }
      }
     });
  }

  findAll(){
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        imgUrl: true,
        content: true,
        slug: true,
        published: true,
      },
    });
  }

  findOne(slug: string){
    return this.prisma.post.findUnique({
      where: { slug },
      include: {
        categories: {
          select: {
            name: true
          }
        },
        profile: {
          select: {
            name: true,
            avatar: true,
            slug: true
          }
        }
      },
    });
  }

  update(id: number, { 
    title, description, imgUrl, content, afterPost, 
    beforePost, published }: UpdatePostDto){
    return this.prisma.post.update({ 
      where: { id }, 
      data: {
        title,
        description,
        imgUrl,
        content,
        afterPost,
        beforePost,
        published
      },
    });
  }

  remove(id: number){
    return this.prisma.post.delete({ 
      where: { id },
      include: {
        comments: true
      }
    });
  }

}