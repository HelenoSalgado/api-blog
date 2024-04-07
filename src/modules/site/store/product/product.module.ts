import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { PrismaStoreModule } from '../../../prisma/store/prisma.module';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [PrismaStoreModule],
})
export class ProductModule {}
