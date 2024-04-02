import { HttpException, Injectable } from '@nestjs/common';
import type { UpdateUserDto } from './user.dto';
import { AdminUserRepository } from './user.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class AdminUserService {

  constructor(private repository: AdminUserRepository) {}

  async findOne(id: number){
    return await this.repository.finOne(Number(id));
  }

  async findAll(){
    return await this.repository.findAll();
  }

  async update(id: number, updateUser: UpdateUserDto){
    return await this.repository.update(Number(id), updateUser);
  }

}