import { AddReminderDto } from './dto/add-reminder.dto';
import { RemindersService } from './reminders.service';
export declare class RemindersController {
    private remindersService;
    constructor(remindersService: RemindersService);
    getGoals(req: any): Promise<import(".prisma/client").Reminder[]>;
    postNotes(req: any, addReminders: AddReminderDto): void;
}
