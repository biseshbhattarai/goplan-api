import { EmployementStatus } from '.prisma/client';

export class GetUserDto {
  id: number;
  fullName: string;
  email: string;
  dob: Date;
  phoneNumber: string;
  employmentStatus: EmployementStatus;
  password: string;
}
