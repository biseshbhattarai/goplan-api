import {
  Controller,
  UseGuards,
  Request,
  Get,
  HttpCode,
  Post,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AchievementsService } from './achievements.service';
import { AddAchievementDto } from './dto/add-achievement.dto';

@Controller('api/achievements')
export class AchievementsController {
  constructor(private achievementsService: AchievementsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getGoals(@Request() req) {
    return this.achievementsService.getUserAchievements(req.user.id);
  }

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Post('/create/:goalId')
  postNotes(@Request() req, @Body() addAchievementDto: AddAchievementDto) {
    this.achievementsService.addUserAchievements(
      addAchievementDto,
      req.user.id,
      +req.params.goalId,
    );
  }
}
