import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional
} from 'class-validator';
import { CreatePostDto } from '../post/post.dto';

export class CreateProfileDto {

  id: number;

  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  avatar?: string;

  @IsOptional()
  @ApiProperty()
  @MaxLength(355)
  biograpy?: string;

  @IsOptional()
  @ApiProperty()
  image?: string;

  @IsNotEmpty()
  @ApiProperty()
  slug: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @IsOptional()
  @ApiProperty()
  posts?: CreatePostDto[];

  @IsNotEmpty()
  @ApiProperty()
  userId: number;

}

export class UpdateProfileDto extends PartialType(OmitType(CreateProfileDto, ['slug'] as const)) {}