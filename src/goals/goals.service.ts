import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { AddGoalDto } from './dto/add-goal.dto';

@Injectable()
export class GoalsService {
  constructor(private prismaService: PrismaService) {}

  async getUserGoals(id: number) {
    return this.prismaService.goal.findMany({ where: { userId: id } });
  }

  async addUserGoals(goal: AddGoalDto, userId: number) {
    const data = {
      ...goal,
      createDate: new Date(goal.createDate),
      startDate: new Date(goal.startDate),
      toCompleteDate: new Date(goal.toCompleteDate),
      userId: userId,
    };
    return await this.prismaService.goal.create({ data: data });
  }
}
