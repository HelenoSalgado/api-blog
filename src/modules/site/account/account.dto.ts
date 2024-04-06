import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { CreateUserDto } from '../user/user.dto';
import type { Role } from '@prisma/client';

export class CreateAccountDto {

  id: number;

  @MaxLength(21)
  @ApiProperty()
  name: string;

  @IsOptional()
  @MaxLength(255)
  @ApiProperty()
  logo: string;

  @MaxLength(100)
  @ApiProperty()
  CNPJ: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  provider?: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsOptional()
  resetPasswordToken?: string;

  @IsOptional()
  confirmationToken?: string;

  confirmed: boolean;

  blocked: boolean;

  @IsNotEmpty()
  @ApiProperty()
  user:  CreateUserDto;

  @IsNotEmpty()
  @ApiProperty()
  planId: number;
}

export class UpdateAccountDto extends PartialType(OmitType(CreateAccountDto, ['email'] as const)) {
  @IsOptional()
  @ApiProperty()
  userId: number;

  @IsOptional()
  @ApiProperty()
  userGroupId: number;

  @IsOptional()
  @ApiProperty()
  role: Role;
}