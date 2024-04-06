import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateCategoryDto } from '../category/category.dto';

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
  profileId: number;

  accountId: number;

  @IsNotEmpty()
  @ApiProperty()
  imgUrl: string;
      
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
  categories: CreateCategoryDto[]    

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

}

export class UpdatePostDto extends PartialType(CreatePostDto) {}