import { EmployementStatus } from '.prisma/client';
export declare class AddUserDto {
    fullName: string;
    email: string;
    dob: string;
    phoneNumber: string;
    employmentStatus: EmployementStatus;
    password: string;
}
export declare class AddUserProfileDto {
    bio: string;
    mediaHandle: string;
}
