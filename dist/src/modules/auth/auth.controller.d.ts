import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-tdo';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: Request, signInDto: SignInDto): Promise<{
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
    signInVerify(req: Request): Promise<{
        access_token: any;
    }>;
}
