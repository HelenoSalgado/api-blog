import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Address, Shipment } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
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