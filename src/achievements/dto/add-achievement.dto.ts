import { IsNotEmpty, IsString } from 'class-validator';

export class AddAchievementDto {
  @IsNotEmpty()
  @IsString()
  achievementStatus?: string;
}
