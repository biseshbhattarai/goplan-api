import { PrismaService } from 'src/prisma/prisma.service';
import { AddReminderDto } from './dto/add-reminder.dto';
export declare class RemindersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUserReminders(id: number): Promise<import(".prisma/client").Reminder[]>;
    addUserReminders(reminder: AddReminderDto, userId: number, goalId: number): Promise<import(".prisma/client").Reminder>;
}
