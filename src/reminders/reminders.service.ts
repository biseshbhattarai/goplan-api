import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddReminderDto } from './dto/add-reminder.dto';

@Injectable()
export class RemindersService {
  constructor(private prismaService: PrismaService) {}

  async getUserReminders(id: number) {
    return this.prismaService.reminder.findMany({ where: { userId: id } });
  }

  async addUserReminders(
    reminder: AddReminderDto,
    userId: number,
    goalId: number,
  ) {
    const data = {
      ...reminder,
      goalId: goalId,
      userId: userId,
      createDate: new Date(reminder.createDate),
      remindDate: new Date(reminder.remindDate),
    };
    return await this.prismaService.reminder.create({ data: data });
  }
}
