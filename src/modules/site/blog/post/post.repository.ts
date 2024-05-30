import { Injectable } from '@nestjs/common';
import type { CreatePostDto, UpdatePostDto } from './post.dto';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import { PaginateFunction, PaginatedResult } from 'prisma-pagination';
import { paginator } from 'src/modules/prisma/paginator';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaBlogService) {}

  create({ 
    title, description, image, content, slug,
    afterPost, beforePost, categories, published, profileId, accountId 
  }: CreatePostDto){
    return this.prisma.post.create({ 
      data: {
        title, 
        description, 
        image,
        content, 
        slug,
        afterPost,
        beforePost,
        published,
        profile: {
          connect: { id: profileId }
        },
        account: {
          connect: { id: accountId }
        },
        // categories: {
        //   connect: categories.map(({id}) => { return {id}})
        // }
      }
     });
  }

  async findAll(page: number, perPage: number ):Promise<PaginatedResult<CreatePostDto>> {
    const paginate: PaginateFunction = paginator({ perPage });
    return paginate(
      this.prisma.post,
      {
        where: {},
        orderBy: {
          id: 'desc'
        },
      },
      {
        page,
      },
    );
  }

  findOne(slug: string){
    return this.prisma.post.findUnique({
      where: { slug },
      include: {
        categories: {
          select: {
            id: true,
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
    title, description, image, content, slug, afterPost, 
    beforePost, published, categories }: UpdatePostDto){
    return this.prisma.post.update({ 
      where: { id }, 
      data: {
        title,
        description,
        image,
        content,
        slug,
        afterPost,
        beforePost,
        published,
        categories: {
          set: [],
          connect: categories
        }
      }
    });
  }

  published(ids: number[], published: boolean){
    return this.prisma.post.updateMany({
      where: {
        id: {
          in: ids
        }
      },
      data: {
        published
      }
    })
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