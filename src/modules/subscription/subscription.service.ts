import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from './subscription.repository';

@Injectable()
export class SubscriptionService {

  constructor(private repository: SubscriptionRepository) {}

  async findOne(id: number){
    return await this.repository.create();
  }

}