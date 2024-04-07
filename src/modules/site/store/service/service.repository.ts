import { Injectable } from '@nestjs/common';
import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateServiceDto, UpdateServiceDto } from './service.dto';

@Injectable()
export class ServiceRepository {

  constructor(private prisma: PrismaStoreService) {}

  create({ name, priceUnit, basicUnit, active, period, taxPercentage }: CreateServiceDto){
    return this.prisma.service.create({ 
      data: {
        name,
        priceUnit,
        active,
        taxPercentage,
        period,
        basicUnit
      }
    });
  }

  findOne(id: number){
    return this.prisma.service.findUnique({ 
      where: { id }
    });
  }

  findAll(accountId: number){
    return this.prisma.service.findMany({
      where: { }
    });
  }

  update(id: number, {name, priceUnit, active, taxPercentage, period, basicUnit }: UpdateServiceDto){
    return this.prisma.service.update({
      where: { id },
      data: {
        name,
        priceUnit,
        active,
        taxPercentage,
        period,
        basicUnit
      },
    });
  }

  remove(id: number) {
    return this.prisma.service.delete({ where: { id } });
  }

}