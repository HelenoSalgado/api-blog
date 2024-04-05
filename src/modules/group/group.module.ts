import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GroupService } from './group.service';
import { GroupRepository } from './group.repository';

@Module({
  controllers: [GroupController],
  providers: [GroupService, GroupRepository],
  imports: [PrismaModule],
})
export class GroupModule {}
