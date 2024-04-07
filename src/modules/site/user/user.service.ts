import { HttpException, Injectable } from '@nestjs/common';
import type { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserRepository } from './user.repository';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class UserService {

  constructor(private repository: UserRepository) {}

  async create(createUser: CreateUserDto){

    const userExist = await this.repository.findUserAuth(createUser.email);

    if(userExist) throw new HttpException("Usuário já existe", 409);

    const salt = genSaltSync(12);
    createUser.password = hashSync(createUser.password, salt);

    return await this.repository.create(createUser);

  }

  async findAll(){
    return await this.repository.findAll();
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