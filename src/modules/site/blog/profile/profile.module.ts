import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { PrismaModule } from '../../../prisma/prisma.module';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  imports: [PrismaModule],
})
export class ProfileModule {}