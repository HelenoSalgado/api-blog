import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { CreatePostDto } from '../post/post.dto';

export class CreateCategoryDto {
 
  id: number;

  @IsOptional()
  accountId: number;

  @IsNotEmpty({message: 'Nome não pode ser vazio'})
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  description?: string;

  @IsOptional()
  image?: string;

  @IsOptional()
  @ApiProperty()
  published: boolean;

  @IsNotEmpty({message: 'Adicione no mínimo um post'})
  @ApiProperty()
  posts: [{
    id: number;
  }];

}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {};