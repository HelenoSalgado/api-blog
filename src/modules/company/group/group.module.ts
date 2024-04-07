import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { PrismaBlogModule } from '../../prisma/blog/prisma.module';
import { GroupService } from './group.service';
import { GroupRepository } from './group.repository';

@Module({
  controllers: [GroupController],
  providers: [GroupService, GroupRepository],
  imports: [PrismaBlogModule],
})
export class GroupModule {}
