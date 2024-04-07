import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { PrismaStoreModule } from '../../../prisma/store/prisma.module';
import { ServiceService } from './service.service';
import { ServiceRepository } from './service.repository';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, ServiceRepository],
  imports: [PrismaStoreModule],
})
export class ServiceModule {}
