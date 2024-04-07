import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { PrismaBlogModule } from '../../prisma/blog/prisma.module';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';

@Module({
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  imports: [PrismaBlogModule],
})
export class AccountModule {}
