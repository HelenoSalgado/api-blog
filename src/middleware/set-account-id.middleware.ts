import { Body, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Req } from 'src/types/express';

@Injectable()
export class SetIdAccountMiddleware implements NestMiddleware {

   constructor(private jwtService: JwtService){}

   use(req: Req, res: Response, next: NextFunction) {
      const user = this.jwtService.decode(req.headers.authorization);
      if(!user) throw new UnauthorizedException('Operação não autorizada');
      req.body.accountId = Number(user.accountId);
      next();
   }
}