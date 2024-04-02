import { Injectable } from '@nestjs/common';
import type { CreateClientDto, UpdateClientDto } from './client.dto';
import { ClientRepository } from './client.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class ClientService {

  constructor(private repository: ClientRepository) {}

  async create(createClient: CreateClientDto){

    //const clientExist = await this.repository.findEmail(createclient.email);

    //if(clientExist) return { message: msg.clientExist, statusCode: 200 };

    return await this.repository.create(createClient);

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

  async update(id: number, updateClient: UpdateClientDto){
    return await this.repository.update(Number(id), updateClient);
  }

  async remove(id: number) {
    return await this.repository.remove(Number(id));
  }

}