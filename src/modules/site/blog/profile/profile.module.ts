import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { PrismaBlogModule } from '../../../prisma/blog/prisma.module';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  imports: [PrismaBlogModule],
})
export class ProfileModule {}