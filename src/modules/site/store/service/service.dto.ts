import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateServiceDto {

  id: number;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  priceUnit: string;

  @IsNotEmpty()
  @ApiProperty()
  basicUnit: string;

  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty()
  taxPercentage: string;

  @IsNotEmpty()
  @ApiProperty()
  active: boolean;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  period: number;

  @IsNotEmpty()
  @ApiProperty()
  serviceSale: []

}

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}