import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateAccountDto, UpdateAccountDto } from './account.dto';
import { Role } from 'prisma/prisma-client';

@Injectable()
export class AccountRepository {

  constructor(private prisma: PrismaService) {}

  create({ company, logo, CNPJ, email, password, user, planId }: CreateAccountDto){
    return this.prisma.account.create({ 
      data: {
        company,
        CNPJ,
        logo,
        email,
        password,
        plan: {
          connect: { id: planId }
        },
        users: {
          create: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            username: user.username,
            role: Role.ADMIN
            }
          }
        },
        select: {
          id: true,
          company: true,
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
        logo: true,
        email: true,
        CNPJ: true,
        confirmed: true,
        plan: {
          select: {
            name: true,
            active: true,
            limitUsers: true,
            userGroup: {
              select: {
                limitUsers: true,
                users: {
                  select: {
                    id: true,
                    firstName: true,
                    email: true,
                    role: true
                  }
                },
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
        logo: true,
        CNPJ: true,
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
    company, logo, CNPJ, password, planId
  }: UpdateAccountDto){
    return this.prisma.account.update({
      where: { id },
      data: {
        company,
        logo,
        CNPJ,
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