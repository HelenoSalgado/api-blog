import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { UpdateProfileDto } from './profile.tdo';

@Injectable()
export class ProfileRepository {

  constructor(private prisma: PrismaBlogService) {}

  findOne(slug: string){
    return this.prisma.profile.findUnique({
      where: { slug },
      include: {
        posts: {
          select: {
            slug: true
          }
        }
      }
    });
  };

  update(slug: string, { name, avatar, image, biograpy, published, userId }: UpdateProfileDto){
    return this.prisma.profile.update({
      where: { slug },
      data: {
        name,
        avatar,
        image,
        biograpy,
        published
      },
    });
  };

}