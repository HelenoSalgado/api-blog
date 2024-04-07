import { Injectable } from '@nestjs/common';
import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductRepository {

  constructor(private prisma: PrismaStoreService) {}

  create({ name, priceUnit, basicUnit, limited, active, taxPercentage }: CreateProductDto){
    return this.prisma.product.create({ 
      data: {
        name,
        priceUnit,
        basicUnit,
        limited,
        active,
        taxPercentage
      }
    });
  }

  findOne(id: number){
    return this.prisma.product.findUnique({ 
      where: { id }
    });
  }

  findAll(accountId: number){
    return this.prisma.product.findMany({
      where: { }
    });
  }

  update(id: number, { name, priceUnit, basicUnit, limited, active, taxPercentage }: UpdateProductDto){
    return this.prisma.product.update({
      where: { id },
      data: {
        name, 
        priceUnit, 
        basicUnit, 
        limited, 
        active, 
        taxPercentage
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

}