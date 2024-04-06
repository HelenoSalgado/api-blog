import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  imports: [PrismaModule],
})
export class AccountModule {}
