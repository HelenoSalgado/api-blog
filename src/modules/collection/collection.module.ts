import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CollectionService } from './collection.service';
import { CollectionRepository } from './collection.repository';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, CollectionRepository],
  imports: [PrismaModule],
})
export class CollectionModule {}
