import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength
} from 'class-validator';

export class CreateProductDto {

  id: number;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  priceUnit: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  basicUnit: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  taxPercentage: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  limited: boolean;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  active: boolean;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  productSale: []

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  stock: string

}

export class UpdateProductDto extends PartialType(CreateProductDto) {}