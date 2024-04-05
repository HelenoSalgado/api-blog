import { HttpException, Injectable } from '@nestjs/common';
import type { CreateClientDto, UpdateClientDto } from './client.dto';
import { ClientRepository } from './client.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class ClientService {

  constructor(private repository: ClientRepository) {}

  async create(createClient: CreateClientDto){

    const clientExist = await this.repository.verifyClient(createClient.email, createClient.accountId);

    if(clientExist.id) throw new HttpException("Client já existe", 409);

    return await this.repository.create(createClient);

  }

  // Retorna um client ou todos os clients
  async find(accountId: number, clientId: number){
    if(!clientId) return await this.repository.findAll(Number(accountId))
    return await this.repository.findOne(Number(clientId), Number(accountId));
  }

  async findAll(accountId: number){
    return await this.repository.findAll(Number(accountId));
  }

  async update(id: number, updateClient: UpdateClientDto){
    return await this.repository.update(Number(id), updateClient);
  }

  async remove(id: number) {
    return await this.repository.remove(Number(id));
  }

}