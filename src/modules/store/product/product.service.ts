import { HttpException, Injectable } from '@nestjs/common';
import type { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductRepository } from './product.repository';
import { msg } from 'src/constants/msgUser';

@Injectable()
export class ProductService {

  constructor(private repository: ProductRepository) {}

  async create(createProduct: CreateProductDto){

    // const clientExist = await this.repository.verifyClient(createClient.email, createClient.accountId);

    // if(clientExist.id) throw new HttpException("Client já existe", 409);

    // return await this.repository.create(createClient);

  }

  // Retorna um client ou todos os clients
  async find(accountId: number, productId: number){
    if(!productId) return await this.repository.findAll(Number(accountId))
    return await this.repository.findOne(Number(productId), Number(accountId));
  }

  async findAll(accountId: number){
    return await this.repository.findAll(Number(accountId));
  }

  async update(id: number, updateProduct: UpdateProductDto){
    return await this.repository.update(Number(id), updateProduct);
  }

  async remove(id: number) {
    return await this.repository.remove(Number(id));
  }

}