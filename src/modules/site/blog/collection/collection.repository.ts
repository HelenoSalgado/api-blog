import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';

@Injectable()
export class CollectionRepository {
  constructor(private prisma: PrismaBlogService) {}

  create({ 
    title, image, author, slug, posts, published
  }: CreateCollectionDto){
    return this.prisma.collection.create({ 
      data: {
        title, 
        image, 
        author, 
        slug, 
        posts: {
          connect: {
            id: Number(posts.map(post => post.id).toString())
          }
        },
        published
      }
     });
  }

  findAll(){
    return this.prisma.collection.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        author: true,
        slug: true,
        published: true,
      },
    });
  }

  findOne(slug: string){
    return this.prisma.collection.findUnique({
      where: { slug },
      include: {
        posts: true
      },
    });
  }

  update(id: number, { title, image, author, slug, posts, published }: UpdateCollectionDto){
    return this.prisma.collection.update({ 
      where: { id }, 
      data: {
        title,
        image,
        author,
        slug,
        posts: {
          connect: {
            id: Number(posts.map(post => post.id).toString())
          }
        },
        published
      },
    });
  }

  remove(id: number){
    return this.prisma.post.delete({ where: { id } });
  }

}