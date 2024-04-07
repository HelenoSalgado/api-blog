import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from '../blog/profile/profile.tdo';

export class CreateUserDto {

  id: number;

  @IsNotEmpty()
  @ApiProperty()
  accountId: number;

  @IsOptional()
  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  firstName?: string;

  @IsOptional()
  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  lastName?: string;

  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  provider?: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  jobTitle?: string;

  profile?: CreateProfileDto;

  @IsOptional()
  resetPasswordToken?: string;

  @IsOptional()
  confirmationToken?: string;

  confirmed: boolean;

  blocked: boolean;
}

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['email'] as const)) {}