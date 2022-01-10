import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {}
