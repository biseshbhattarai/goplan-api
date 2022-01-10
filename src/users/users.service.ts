import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AddUserDto, AddUserProfileDto } from './dto/add-user.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getSingleUser(arg: number | string): Promise<GetUserDto> {
    if (typeof arg == 'string') {
      return await this.prisma.user.findFirst({ where: { email: arg } });
    }
    return await this.prisma.user.findFirst({ where: { id: arg } });
  }

  async encrptPassword(password: string) {
    try {
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
      return encryptedPassword;
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: AddUserDto) {
    try {
      const password = await this.encrptPassword(user.password);
      await this.prisma.user.create({
        data: { ...user, password, dob: new Date(user.dob) },
      });
    } catch (error) {
      throw error;
    }
  }

  async createUserProfile(profile: AddUserProfileDto, image, userId: number) {
    const data = {
      ...profile,
      profileImage: image,
      userId: userId,
    };
    return await this.prisma.profile.create({ data: data });
  }
}
