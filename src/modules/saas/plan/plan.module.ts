import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PrismaBlogModule } from '../../prisma/blog/prisma.module';
import { PlanService } from './plan.service';
import { PlanRepository } from './plan.repository';

@Module({
  controllers: [PlanController],
  providers: [PlanService, PlanRepository],
  imports: [PrismaBlogModule],
})
export class PlanModule {}
