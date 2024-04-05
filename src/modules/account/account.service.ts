import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import type { CreateAccountDto, UpdateAccountDto } from './account.dto';
import { AccountRepository } from './account.repository';
import { UserService } from '../user/user.service';

@Injectable()
export class AccountService {

  constructor(private repository: AccountRepository) {}

  async create(createAccount: CreateAccountDto){

    const accountExist = await this.repository.findEmail(createAccount.email);

    if(accountExist) throw new HttpException("Conta já existe", 409);

    const userExist = await this.repository.findUserEmail(createAccount.user.email);

    if(userExist) throw new HttpException("Usuário já existe em outra conta", 409);

    return await this.repository.create(createAccount);

  }

  async findAll(){
    return await this.repository.findAll();
  }

  async findOne( id: number ){
    return await this.repository.findOne(Number(id));
  }

  async update(id: number, updateAccount: UpdateAccountDto){
    return await this.repository.update(Number(id), updateAccount);
  }

  async remove(id: number) {
    await this.repository.remove(Number(id));
  }

}