import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class AddReminderDto {
  @IsNotEmpty()
  @IsString()
  reminderTitle: string;

  @IsNotEmpty()
  @IsDateString()
  createDate: string;

  @IsNotEmpty()
  @IsDateString()
  remindDate: string;
}
