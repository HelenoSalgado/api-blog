import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../../prisma/blog/prisma.service';
import type { UpdateProfileDto } from './profile.tdo';

@Injectable()
export class ProfileRepository {

  constructor(private prisma: PrismaBlogService) {}

  findOne(id: number){
    return this.prisma.profile.findUnique({
      where: { id },
      include: {
        posts: {
          select: {
            slug: true
          }
        }
      }
    });
  };

  update(id: number, { name, avatar, image, biograpy, published }: UpdateProfileDto){
    return this.prisma.profile.update({
      where: { id },
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