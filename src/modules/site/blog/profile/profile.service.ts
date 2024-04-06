import { Injectable } from '@nestjs/common';
import type { UpdateProfileDto } from './profile.tdo';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {

  constructor(private repository: ProfileRepository) {}

  async findOne(id: number){
    return await this.repository.findOne(Number(id));
  }

  async update(id: number, updateProfile: UpdateProfileDto){
    return await this.repository.update(Number(id), updateProfile)
  }
}
