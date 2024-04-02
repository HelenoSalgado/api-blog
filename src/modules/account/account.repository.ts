import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateAccountDto, UpdateAccountDto } from './account.dto';

@Injectable()
export class AccountRepository {

  constructor(private prisma: PrismaService) {}

  create({ company, CNPJ, email, password }: CreateAccountDto){
    return this.prisma.account.create({ 
      data: {
        company,
        CNPJ,
        email,
        password
      },
      select: {
        company: true,
        CNPJ: true,
        email: true,
      },
    });
  }

  findAll(){
    return this.prisma.account.findMany({
      select: {
        id: true,
        company: true,
        email: true,
        CNPJ: true,
        confirmed: true,
      },
    });
  }

  async findEmail(email: string){
    return this.prisma.account.findUnique({ 
      where: { email },
      select: {
        email: true,
      },
    });
  }

  findOne( id: number ){
    return this.prisma.account.findUnique({ 
      where: { id },
      select: {
        id: true,
        company: true,
        CNPJ: true,
        email: true,
        confirmed: true,
        users: {
          select: {
            firstName: true,
            email: true,
            inGroup: {
              select: {
                groupType: true
              }
            }
          }
        }
      },
     });
  }

  update(id: number, { company, CNPJ, password }: UpdateAccountDto){
    return this.prisma.account.update({
      where: { id },
      data: {
        company,
        CNPJ,
        password
      }
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }

}