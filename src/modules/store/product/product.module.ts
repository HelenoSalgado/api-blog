import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [PrismaModule],
})
export class ProductModule {}
