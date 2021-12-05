import { EmployementStatus } from '.prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsString,
  IsDateString,
  IsUrl,
  IsNumber,
} from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  dob: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(EmployementStatus)
  employmentStatus: EmployementStatus;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class AddUserProfileDto {
  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsUrl()
  mediaHandle: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
