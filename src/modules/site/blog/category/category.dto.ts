import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { CreatePostDto } from '../post/post.dto';

export class CreateCategoryDto {
 
  id: number;

  accountId: number;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsOptional()
  @ApiProperty()
  published: boolean;

  @IsNotEmpty()
  @ApiProperty()
  posts: CreatePostDto[];

}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}