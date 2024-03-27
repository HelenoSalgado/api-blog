import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/modules/profile/profile.tdo';

export class CreateUserDto {

  id: number;

  @IsOptional()
  @MinLength(2)
  @MaxLength(21)
  @ApiProperty()
  name?: string;

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