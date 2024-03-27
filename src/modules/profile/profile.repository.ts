import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { UpdateProfileDto } from './profile.tdo';

@Injectable()
export class ProfileRepository {

  constructor(private prisma: PrismaService) {}

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

  update(id: number, { name, avatarUrl, imgUrl, biograpy, published }: UpdateProfileDto){
    return this.prisma.profile.update({
      where: { id },
      data: {
        name,
        avatarUrl,
        imgUrl,
        biograpy,
        published
      },
    });
  };

}