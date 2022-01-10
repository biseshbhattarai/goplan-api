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
import { AddReminderDto } from './dto/add-reminder.dto';
import { RemindersService } from './reminders.service';

@Controller('api/reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getGoals(@Request() req) {
    return this.remindersService.getUserReminders(req.user.id);
  }

  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  @Post('/create/:goalId')
  postNotes(@Request() req, @Body() addReminders: AddReminderDto) {
    this.remindersService.addUserReminders(
      addReminders,
      req.user.id,
      +req.params.goalId,
    );
  }
}
