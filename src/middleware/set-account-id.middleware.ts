import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SetIdAccountMiddleware implements NestMiddleware {

   constructor(private jwtService: JwtService){}

   use(req: Request, res: Response, next: NextFunction) {
      const user = this.jwtService.decode(req.headers.authorization);
      if(!user) throw new UnauthorizedException('accountId - chave não encontrada');
      req.body.accountId = Number(user.accountId);
      next();
   }
}