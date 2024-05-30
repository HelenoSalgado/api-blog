import { ApiProperty } from '@nestjs/swagger';
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