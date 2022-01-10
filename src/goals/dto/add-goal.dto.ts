import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class AddGoalDto {
  @IsNotEmpty()
  @IsString()
  goalTitle: string;

  @IsNotEmpty()
  @IsString()
  goalDescription: string;

  @IsNotEmpty()
  @IsDateString()
  createDate: string;

  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  toCompleteDate: string;

  @IsNotEmpty()
  toSetReminder: boolean;
}
