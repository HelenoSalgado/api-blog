import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { CreateAccountDto, UpdateAccountDto } from './account.dto';
import { Role } from 'prisma/prisma-client';

@Injectable()
export class AccountRepository {

  constructor(private prisma: PrismaService) {}

  create({ name, logo, CNPJ, email, password, user, planId }: CreateAccountDto){
    return this.prisma.account.create({ 
      data: {
        email,
        company: {
         create: { name, CNPJ, logo,
          contact: {
            create: { whatsApp: '', celular: '', email: '', tel: '' }
          }
         }
        },
        password,
        plan: {
          connect: { id: planId }
        },
        users: {
          create: { firstName: user.firstName, lastName: user.lastName, email: user.email,
            password: user.password, username: user.username, role: Role.ADMIN }
          }
        },
        select: {
          id: true,
          email: true,
          plan: {
            select: {
              name: true,
              limitUsers: true,
              active: true
            }
          },
          confirmed: true,
        }
    });
  }

  findAll(){
    return this.prisma.account.findMany({
      select: {
        id: true,
        company: true,
        email: true,
        confirmed: true,
        plan: {
          select: {
            name: true,
            active: true,
            limitUsers: true,
            userGroup: {
              select: {
                user: {
                  select: {
                    id: true,
                    firstName: true,
                    email: true,
                    role: true
                  }
                },
                limitUsers: true,
                groupType: {
                  select: {
                    role: true
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  async findEmail(email: string){
    return this.prisma.account.findUnique({ 
      where: { email },
      select: {
        email: true
      },
    });
  }

  async findUserEmail(email: string){
    return this.prisma.user.findUnique({ 
      where: { email },
      select: {
        email: true
      },
    });
  }

  findOne(id: number){
    return this.prisma.account.findUnique({ 
      where: { id },
      select: {
        id: true,
        company: true,
        email: true,
        confirmed: true,
        users: {
          select: {
            id: true,
            firstName: true,
            email: true,
            role: true
          }
        },
        plan: {
          select: {
            name: true,
            active: true,
            limitUsers: true,
            userGroup: {
              select: {
                limitUsers: true,
                groupType: {
                  select: {
                    role: true
                  }
                }
              }
            }
          }
        }
      },
     });
  }

  update(id: number, { 
    name, logo, CNPJ, password, planId
  }: UpdateAccountDto){
    return this.prisma.account.update({
      where: { id },
      data: {
        password,
        planId
      },
      select: {
        users: {
          select: {
            id: true,
            firstName: true,
            email: true,
            role: true
          }
        },
        plan: {
          select: {
            name: true,
            active: true,
            limitUsers: true,
            userGroup: {
              select: {
                limitUsers: true,
                groupType: {
                  select: {
                    role: true
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({ 
      where: { id },
      include: {
        posts: true,
        sendNewlatter: true,
        users: {
          include: {
            profile: true
          }
        },
      } 
    });
  }

}