import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
 
  id: number;

  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsNotEmpty()
  @ApiProperty()
  image: string;
      
  @IsNotEmpty()
  @ApiProperty()
  slug: string;
   
  @IsOptional()
  @ApiProperty()
  afterPost?: string;

  @IsOptional()
  @ApiProperty()
  beforePost?: string;
  
  @IsOptional()
  @ApiProperty()
  categories: {
      id: number
  }[]

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @IsOptional()
  @ApiProperty()
  profileId: number;

  @ApiProperty()
  @IsOptional()
  accountId: number;

}

export class UpdatePostDto extends PartialType(CreatePostDto) {}