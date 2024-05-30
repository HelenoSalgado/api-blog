import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Req } from 'src/types/express';
export declare class SetIdAccountMiddleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(req: Req, res: Response, next: NextFunction): void;
}
