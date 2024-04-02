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
  whatsApp?: number;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  company: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  VAT_ID: string;

  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  cityId: number; 

  @IsNotEmpty()
  @ApiProperty()
  address: Address[]

  @IsNotEmpty()
  @ApiProperty()
  Shipment: Shipment[]
  
}

export class UpdateClientDto extends PartialType(OmitType(CreateClientDto, ['email'] as const)) {}