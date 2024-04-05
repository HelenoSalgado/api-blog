import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductRepository {

  constructor(private prisma: PrismaService) {}

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

  findAll(accountId: number){
    return this.prisma.product.findMany({
      
    });
  }

  findOne(id: number, accountId: number){
    return this.prisma.product.findFirst({ 
     
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