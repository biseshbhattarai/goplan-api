import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  HttpCode,
  Body,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AddUserDto } from './dto/add-user.dto';
import { UsersService } from './users.service';

@Controller('api/user')
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}
  @Post('/register')
  @HttpCode(204)
  async register(@Body() createUser: AddUserDto) {
    try {
      return this.usersService.createUser(createUser);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() loginUserData) {
    return this.authService.login(loginUserData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return this.usersService.getSingleUser(req.user.id);
  }
}
