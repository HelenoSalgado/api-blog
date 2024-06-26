import {
    Body,
    Controller, 
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in-tdo';
import { Public } from './decorators/public.decorator'; 
import { Request } from 'express';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Public()
  @HttpCode(HttpStatus.OK)
    
  @Post()
  async signIn(@Req() req: Request, @Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password, req);
  }

  @Get('/verify')
  async signInVerify(@Req() req: Request) {
    return await this.authService.signInVerify(req.headers.authorization);
  }
}