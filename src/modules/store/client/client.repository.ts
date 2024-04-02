import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { CreateClientDto, UpdateClientDto } from './client.dto';

@Injectable()
export class ClientRepository {

  constructor(private prisma: PrismaService) {}

  create({ firstName, lastName,  VAT_ID, email, whatsApp, company, cityId, address, Shipment }: CreateClientDto){
    return this.prisma.client.create({ 
      data: {
        firstName,
        lastName,
        VAT_ID,
        company,
        email,
        whatsApp,
        Shipment: {
          create: Shipment
        },
        city: {
          connect: {
            id: cityId
          }
        },
        address: {
          create: address
        }
      }
    });
  }

  findAll(){
    return this.prisma.client.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        company: true,
        email: true,
        whatsApp: true
      },
    });
  }

  async findEmail(email: string){
    return this.prisma.client.findUnique({ 
      where: { email },
      select: {
        email: true,
      },
    });
  }

  findOne(id: number){
    return this.prisma.client.findUnique({ 
      where: { id },
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
      },
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