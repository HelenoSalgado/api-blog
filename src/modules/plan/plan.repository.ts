import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plan } from 'src/config';

@Injectable()
export class PlanRepository {

  constructor(private prisma: PrismaService) {}

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