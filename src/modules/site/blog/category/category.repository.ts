import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { PaginateFunction } from 'prisma-pagination';
import { paginator } from 'src/modules/prisma/paginator';
import { PaginatedDto } from 'src/general.dto/paginated-dto';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaBlogService) {}

  async create({ id, name, posts, image, published, description, accountId }: CreateCategoryDto){
    return await this.prisma.category.create({ 
      data: {
        name, 
        description, 
        image,
        published,
        account: {
          connect: { id: accountId }
        },
        posts: {
          connect: posts
        }
      }
     });
  }

  findAll(page: number, perPage: number ):Promise<PaginatedDto<CreateCategoryDto>>{
    const paginate: PaginateFunction = paginator({ perPage });
    return paginate(
      this.prisma.category,
      {
        where: {},
        orderBy: {
          id: 'desc'
        },
        select: {
          id: true,
          name: true,
          _count: {
            select: {
              posts: true
            }
          },
          published: true,
        },
      },
      {
        page
      },
    )
  }

  findOne(name: string){
    return this.prisma.category.findUnique({
      where: { name },
      include: {
        posts: {
          select: {
            id: true,
            title: true,
            description: true,
            image: true,
            slug: true
          }
        }
      }
    });
  }

  async update(id: number, { name, description, image, posts, published }: UpdateCategoryDto){
    return await this.prisma.category.update({ 
      where: { id }, 
      data: {
        name,
        description,
        image,
        published,
        posts: {
          set: [],
          connect: posts
        }
      }
    });
  }

  async published(ids: number[], published: boolean){
    return await this.prisma.category.updateMany({
      where: {
        id: {
          in: ids,
        }
      },
      data: {
        published
      }
    });
  }

  async remove(ids: number[]){
    return await this.prisma.category.deleteMany({
      where: {
        id: {
          in: ids,
        }
      }
    });
  }
}