import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserDto } from '../users/dto/get-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: GetUserDto = await this.usersService.getSingleUser(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: GetUserDto) {
    const refUser = await this.usersService.getSingleUser(user.email);
    const payload = { email: user.email, sub: refUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
