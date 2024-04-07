import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { CreateCollectionDto, UpdateCollectionDto } from './collection.dto';

@Injectable()
export class CollectionRepository {
  constructor(private prisma: PrismaBlogService) {}

  create({ 
    title, imgUrl, author, slug, posts, published
  }: CreateCollectionDto){
    return this.prisma.collection.create({ 
      data: {
        title, 
        imgUrl, 
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
        imgUrl: true,
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

  update(id: number, { title, imgUrl, author, slug, posts, published }: UpdateCollectionDto){
    return this.prisma.collection.update({ 
      where: { id }, 
      data: {
        title,
        imgUrl,
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