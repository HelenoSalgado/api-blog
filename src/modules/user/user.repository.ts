import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserRepository {

  constructor(private prisma: PrismaService) {}

  create({ name, username, email, password, jobTitle }: CreateUserDto){
    return this.prisma.user.create({ 
      data: {
        name,
        username,
        email,
        password,
        jobTitle,
        profile: {
          create: {
            name,
            slug: name.toLowerCase().replace(' ', '-')
          }
        }
      },
      select: {
        name: true,
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
        name: true,
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
        name: true,
        email: true,
        jobTitle: true,
        confirmed: true
      },
     });
  }

  update(id: number, { name, jobTitle, confirmed }: UpdateUserDto){
    return this.prisma.user.update({
      where: { id },
      data: {
        name,
        jobTitle,
        confirmed
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

}