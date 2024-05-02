import { Injectable } from '@nestjs/common';
import type { UpdateProfileDto } from './profile.tdo';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {

  constructor(private repository: ProfileRepository) {}

  async findOne(slug: string){
    return await this.repository.findOne(slug);
  }

  async update(slug: string, updateProfile: UpdateProfileDto){
    return await this.repository.update(slug, updateProfile)
  }
}
