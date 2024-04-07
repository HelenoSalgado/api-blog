import { Module } from '@nestjs/common';
import { PrismaBlogService } from './prisma.service';

@Module({
  providers: [PrismaBlogService],
  exports: [PrismaBlogService],
})
export class PrismaBlogModule {}