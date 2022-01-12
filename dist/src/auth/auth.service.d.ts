import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserDto } from '../users/dto/get-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: GetUserDto): Promise<{
        access_token: string;
    }>;
}
