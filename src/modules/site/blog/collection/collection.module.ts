import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { PrismaBlogModule } from '../../../prisma/blog/prisma.module';
import { CollectionService } from './collection.service';
import { CollectionRepository } from './collection.repository';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, CollectionRepository],
  imports: [PrismaBlogModule],
})
export class CollectionModule {}
