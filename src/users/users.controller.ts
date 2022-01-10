import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  HttpCode,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AddUserDto, AddUserProfileDto } from './dto/add-user.dto';
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

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Post('/create/profile')
  @UseInterceptors(FileInterceptor('image'))
  async createProfile(
    @Request() req,
    @Body() addUserProfileDto: AddUserProfileDto,
    @UploadedFile() image,
  ) {
    const imagePath = image ? image.path : null;

    const profileData = addUserProfileDto;
    return await this.usersService.createUserProfile(
      profileData,
      imagePath,
      req.user.id,
    );
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
