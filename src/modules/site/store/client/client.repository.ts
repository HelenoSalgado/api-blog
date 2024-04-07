import { Injectable } from '@nestjs/common';
import { PrismaStoreService } from '../../../prisma/store/prisma.service';
import type { CreateClientDto, UpdateClientDto } from './client.dto';

@Injectable()
export class ClientRepository {

  constructor(private prisma: PrismaStoreService) {}

  create({ firstName, lastName,  VAT_ID, email, whatsApp, company, accountId }: CreateClientDto){
    return this.prisma.client.create({ 
      data: {
        firstName,
        lastName,
        VAT_ID,
        company,
        email,
        whatsApp,
        accountId
      }
    });
  }

  async verifyClient(email: string, accountId: number){
    return this.prisma.client.findFirst({ 
      where: { email, AND: { accountId } },
      select: {
        id: true
      },
    });
  }

  findOne(id: number, accountId: number){
    return this.prisma.client.findFirst({ 
      where: { id, AND: { accountId } },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        company: true,
        email: true,
        whatsApp: true,
        Shipment: {
          select: {
            producSale: true,
            paymentDetails: true,
            shipmentStatus: true,
            address: true
          }
        }
      }
     });
  }

  findAll(accountId: number){
    return this.prisma.client.findMany({
      where: { accountId },
      select: {
        id: true,
        firstName: true,
        email: true,
        whatsApp: true
      }
    });
  }

  update(id: number, { firstName, lastName, company }: UpdateClientDto){
    return this.prisma.client.update({
      where: { id },
      data: {
        firstName,
        lastName,
        company
      },
    });
  }

  remove(id: number) {
    return this.prisma.client.delete({ where: { id } });
  }

}