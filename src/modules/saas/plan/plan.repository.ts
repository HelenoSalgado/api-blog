import { Injectable } from '@nestjs/common';
import { PrismaBlogService } from '../../prisma/blog/prisma.service';

@Injectable()
export class PlanRepository {

  constructor(private prisma: PrismaBlogService) {}

  findOne(id: number){
    return this.prisma.plan.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        software: {
          select: {
            id: true,
            name: true,
            details: true,
            acessLink: true
          }
        },
        currentPrice: true,
        active: true,
        account: {
          select: {
            company: true
          }
        }
      }
    });
  }

  async findAll(){
    return await this.prisma.plan.findMany({
      select: {
        id: true,
        name: true,
        software: {
          select: {
            id: true,
            name: true,
            details: true,
            acessLink: true
          }
        },
        currentPrice: true,
        active: true,
        account: {
          select: {
            company: true
          }
        }
      }
    });
  }

}