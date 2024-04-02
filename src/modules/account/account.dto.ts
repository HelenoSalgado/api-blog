import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/modules/profile/profile.tdo';

export class CreateAccountDto {

  id: number;

  @MaxLength(21)
  @ApiProperty()
  company: string;

  @MaxLength(100)
  @ApiProperty()
  CNPJ: string;

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
}

export class UpdateAccountDto extends PartialType(OmitType(CreateAccountDto, ['email'] as const)) {}