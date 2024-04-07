import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../prisma/blog/prisma.service';

@Injectable()
export class SubscriptionRepository {

  constructor(private prisma: PrismaBlogService) {}

  create(){
    return this.prisma.subscription.create({
      data: {
        plan: {
          connect: {
            id: 1
          }
        },
        dateSubscribed: new Date(),
        endDate: new Date(),
        ofterEndDate: new Date,
        startDate: new Date(),
        ofterId: 1,
        ofterStartDate: new Date(),
        validUntil: new Date()
      }
    })
  }

}