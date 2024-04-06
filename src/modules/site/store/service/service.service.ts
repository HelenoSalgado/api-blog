import { HttpException, Injectable } from '@nestjs/common';
import type { CreateServiceDto, UpdateServiceDto } from './service.dto';
import { ServiceRepository } from './service.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class ServiceService {

  constructor(private repository: ServiceRepository) {}

  async create(createService: CreateServiceDto){

    // const clientExist = await this.repository.verifyClient(createClient.email, createClient.accountId);

    // if(clientExist.id) throw new HttpException("Client já existe", 409);

    // return await this.repository.create(createClient);

  }

  async findOne(id: number){
    return await this.repository.findOne(Number(id));
  }

  async findAll(accountId: number){
    return await this.repository.findAll(Number(accountId));
  }

  async update(id: number, updateService: UpdateServiceDto){
    return await this.repository.update(Number(id), updateService);
  }

  async remove(id: number) {
    return await this.repository.remove(Number(id));
  }

}