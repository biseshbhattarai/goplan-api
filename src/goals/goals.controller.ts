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
import { AddGoalDto } from './dto/add-goal.dto';
import { GoalsService } from './goals.service';

@Controller('api/goals')
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getGoals(@Request() req) {
    return this.goalsService.getUserGoals(req.user.id);
  }

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  postNotes(@Request() req, @Body() addGoalDto: AddGoalDto) {
    this.goalsService.addUserGoals(addGoalDto, req.user.id);
  }
}
