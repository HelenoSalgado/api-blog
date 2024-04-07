import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { secretUser } from 'src/config';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UserModule } from '../site/user/users.module';
import { PrismaBlogModule } from '../prisma/blog/prisma.module';
import { UserRepository } from '../site/user/user.repository';

@Module({
  imports: [
    PrismaBlogModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: secretUser,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [
    AuthService, {
       provide: APP_GUARD,
       useClass: AuthGuard,
    },
    UserRepository,
],
  controllers: [AuthController],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}