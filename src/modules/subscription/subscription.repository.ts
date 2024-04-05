import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubscriptionService } from './subscription.service';

@Injectable()
export class SubscriptionRepository {

  constructor(private prisma: PrismaService) {}

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