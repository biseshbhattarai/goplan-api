import { AuthService } from 'src/auth/auth.service';
import { AddUserDto, AddUserProfileDto } from './dto/add-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUser: AddUserDto): Promise<void>;
    createProfile(req: any, addUserProfileDto: AddUserProfileDto, image: any): Promise<import(".prisma/client").Profile>;
    login(loginUserData: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<import("./dto/get-user.dto").GetUserDto>;
}
