import { Injectable } from '@nestjs/common';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {

  constructor(private repository: PlanRepository) {}

  async findAll(){
    return await this.repository.findAll();
  }

  async findOne(id: number){
    return await this.repository.findOne(Number(id));
  }

}