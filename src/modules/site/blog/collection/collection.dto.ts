import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { CreatePostDto } from '../post/post.dto';

export class CreateCollectionDto {
 
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  image: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  slug: string;

  @IsNotEmpty()
  @ApiProperty()
  posts: CreatePostDto[];

  @IsOptional()
  @ApiProperty()
  published?: boolean;

}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}