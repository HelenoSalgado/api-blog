import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import type { UpdateUserDto } from './user.dto';

@Injectable()
export class AdminUserRepository {

  constructor(private prisma: PrismaService) {}

  finOne(id: number){
    return this.prisma.inGroup.findUnique({
      where: { id },
      select: {
        id: true,
        group: true,
        groupType: true,
        user: true
      }
    });
  }

  async findAll(){
    return await this.prisma.inGroup.findMany({
      select: {
        group: true
      }
    });
  }

  update(id: number, { groupId, groupTypeId, userId }: UpdateUserDto){
    return this.prisma.inGroup.update({
      where: { id },
      data: {
        groupId,
        groupTypeId,
        userId
      }
    });
  }

}