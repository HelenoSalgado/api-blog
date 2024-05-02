import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { Request } from 'express';
import { UserRepository } from '../site/user/user.repository';
import { Role } from '@prisma-blog/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserRepository,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string, req: Request) {

    const user = await this.userService.findUserAuth(email);

    if(!user) throw new NotFoundException('Usuário não existe');

    const comparePass = compareSync(pass, user.password);

    if (!comparePass) throw new UnauthorizedException('Email ou senha incorreta');

    const  payload = { 
      id: user.id,
      accountId: user.accountId, 
      role: user.role
    } as { id: number, accountId: number, role: Role };

    //req['sub'] = payload
   
    return { 
      user: {
        id: user.id,
        username: user.firstName.toLowerCase(),
        profile: {
          slug: user.profile.slug
        }
      },
      access_token: await this.jwtService.signAsync(payload),
    };
  };

  async signInVerify(token: string) {
    return {
      access_token: await this.jwtService.verify(token),
    };
  }
}