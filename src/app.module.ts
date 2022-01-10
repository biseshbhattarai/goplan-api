import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';
import { RemindersModule } from './reminders/reminders.module';
import { AchievementsModule } from './achievements/achievements.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GoalsModule,
    RemindersModule,
    AchievementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
