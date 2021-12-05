import { IsEmail, IsNotEmpty } from 'class-validator';

export class loginEmployeeDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
