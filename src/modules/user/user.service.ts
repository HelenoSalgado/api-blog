import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserRepository } from './user.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class UserService {

  constructor(private repository: UserRepository) {}

  async create(createUser: CreateUserDto){

    const userExist = await this.repository.findEmail(createUser.email);

    if(userExist) return { message: msg.userExist, statusCode: 200 };

    return await this.repository.create(createUser);

  }

  async findAll(){
    return await this.repository.findAll();
  }

  async findEmail(email: string){
    return await this.repository.findEmail(email);
  }

  async findOne( id: number ){
    return await this.repository.findOne(Number(id));
  }

  async update(id: number, updateUser: UpdateUserDto){
    return await this.repository.update(Number(id), updateUser);
  }

  async remove(id: number) {
    return await this.repository.remove(Number(id));
  }

}