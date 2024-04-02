import { Module } from '@nestjs/common';
import { AdminUserController } from './user.controller';
import { PrismaModule } from '../../../prisma/prisma.module';
import { AdminUserService } from './user.service';
import { AdminUserRepository } from './user.repository';

@Module({
  controllers: [AdminUserController],
  providers: [AdminUserService, AdminUserRepository],
  imports: [PrismaModule],
})
export class AdminUserModule {}
