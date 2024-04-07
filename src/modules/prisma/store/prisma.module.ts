import { Module } from '@nestjs/common';
import { PrismaStoreService } from './prisma.service';

@Module({
  providers: [PrismaStoreService],
  exports: [PrismaStoreService],
})
export class PrismaStoreModule {}