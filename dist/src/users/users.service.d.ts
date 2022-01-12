import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDto, AddUserProfileDto } from './dto/add-user.dto';
import { GetUserDto } from './dto/get-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSingleUser(arg: number | string): Promise<GetUserDto>;
    encrptPassword(password: string): Promise<string>;
    createUser(user: AddUserDto): Promise<void>;
    createUserProfile(profile: AddUserProfileDto, image: any, userId: number): Promise<import(".prisma/client").Profile>;
}
