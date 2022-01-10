import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { AddAchievementDto } from './dto/add-achievement.dto';

@Injectable()
export class AchievementsService {
  constructor(private prismaService: PrismaService) {}

  async getUserAchievements(id: number) {
    return this.prismaService.achievement.findMany({ where: { userId: id } });
  }

  async addUserAchievements(
    achievement: AddAchievementDto,
    userId: number,
    goalId: number,
  ) {
    const data = {
      ...achievement,
      goalId: goalId,
      userId: userId,
    };
    return await this.prismaService.achievement.create({ data: data });
  }
}
