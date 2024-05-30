import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserRepository } from '../site/user/user.repository';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserRepository, jwtService: JwtService);
    signIn(email: string, pass: string, req: Request): Promise<{
        user: {
            id: number;
            username: string;
            profile: {
                id: number;
                slug: string;
            };
        };
        access_token: string;
    }>;
    signInVerify(token: string): Promise<{
        access_token: any;
    }>;
}
