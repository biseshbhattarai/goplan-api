import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { RemindersController } from './reminders.controller';
import { RemindersService } from './reminders.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class RemindersModule {}
