import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import {
  IsNotEmpty,
} from 'class-validator';

export class SetGroupDto {

  id: number;
  
  @IsNotEmpty()
  @ApiProperty()
  groupId: number;
  
  @IsNotEmpty()
  @ApiProperty()
  groupTypeId: number;

}