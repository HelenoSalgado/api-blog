import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { PlanService } from './plan.service';
import { PlanRepository } from './plan.repository';

@Module({
  controllers: [PlanController],
  providers: [PlanService, PlanRepository],
  imports: [PrismaModule],
})
export class PlanModule {}
