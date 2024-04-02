import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) {}

  create({ accountId, firstName, lastName, username, email, password, jobTitle }: CreateUserDto){
    return this.prisma.user.create({ 
      data: {
        firstName,
        lastName,
        username,
        email,
        password,
        jobTitle,
        account: {
          connect: {
            id: accountId
          }
        },
        profile: {
          create: {
            name: 'name test',
            slug: firstName.toLowerCase().replace(' ', '-')
          }
        }
      },
      select: {
        id: true,
        firstName: true,
        username: true,
        email: true,
        jobTitle: true
      },
    });
  }

  findAll(){
    return this.prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        email: true,
        jobTitle: true,
        confirmed: true,
      },
    });
  }

  async findEmail(email: string){
    return this.prisma.user.findUnique({ 
      where: { email },
      select: {
        email: true,
      },
    });
  }

  findOne( id: number ){
    return this.prisma.user.findUnique({ 
      where: { id },
      select: {
        id: true,
        firstName: true,
        email: true,
        jobTitle: true,
        confirmed: true,
        inGroup: {
          select: {
            groupType: {
              select: {
                name: true,
                membersMax: true
              }
            }
          }
        }
      },
     });
  }

  update(id: number, { firstName, lastName, jobTitle, confirmed }: UpdateUserDto){
    return this.prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        jobTitle,
        confirmed
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

}