import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../prisma/blog/prisma.service';
import { SetGroupDto } from './group.dto';

@Injectable()
export class GroupRepository {

  constructor(private prisma: PrismaBlogService) {}

  findOne(id: number){
    return this.prisma.userGroup.findUnique({
      where: { id },
      select: {
        plan: {
          select: {
            name: true,
            limitUsers: true
          }
        },
        limitUsers: true,
        groupType: {
          select: {
            role: true
          }
        }
      }
    });
  }

  async findAll(){
    return await this.prisma.userGroup.findMany({
      select: {
        plan: {
          select: {
            name: true,
            limitUsers: true,
          }
        },
        limitUsers: true,
        groupType: {
          select: {
            role: true
          }
        }
      }
    });
  }

  update(id: number, { groupTypeId }: SetGroupDto){
    return this.prisma.userGroup.update({
      where: { id },
      data: {
        groupType: {
          connect: { id: groupTypeId }
        }
      }
    });
  }

}