import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) {}

  create({ id, name, posts, published, description }: CreateCategoryDto){
    return this.prisma.category.create({ 
      data: {
        id,
        name, 
        description, 
        published, 
        posts: {
          connect: {
            id: Number(posts.map(post => { return post.id }).toString())
          }
        }
      }
     });
  }

  findAll(){
    return this.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        posts: true,
        published: true,
      },
    });
  }

  findOne(name: string){
    return this.prisma.category.findUnique({
      where: { name },
      include: {
        posts: {
          select: {
            title: true,
            description: true,
            imgUrl: true,
            slug: true
          }
        }
      }
    });
  }

  update(id: number, { name, description, posts, published }: UpdateCategoryDto){
    return this.prisma.category.update({ 
      where: { id }, 
      data: {
        name,
        description,
        published,
        posts: {
          connect: {
            id: Number(posts.map(post => post.id).toString())
          }
        }
      }
    });
  }

  remove(id: number){
    return this.prisma.category.delete({ where: { id } });
  }

}