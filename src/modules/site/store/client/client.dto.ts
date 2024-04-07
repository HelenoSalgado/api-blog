import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength
} from 'class-validator';

export class CreateClientDto {

  id: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @MaxLength(21)
  @ApiProperty()
  whatsApp?: string = '';

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  company: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  VAT_ID: string;

  @IsNotEmpty()
  @ApiProperty()
  accountId: number; 
  
}

export class UpdateClientDto extends PartialType(OmitType(CreateClientDto, ['email'] as const)) {}