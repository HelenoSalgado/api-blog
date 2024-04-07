import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaBlogModule } from '../../prisma/blog/prisma.module';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [PrismaBlogModule],
})
export class UserModule {}
