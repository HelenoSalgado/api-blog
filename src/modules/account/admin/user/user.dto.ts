import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {

  id: number;

  @IsNotEmpty()
  @ApiProperty()
  groupId: number;

  @IsNotEmpty()
  @ApiProperty()
  groupTypeId: number;

  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  blocked: boolean;
}