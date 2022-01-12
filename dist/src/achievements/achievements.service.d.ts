import { PrismaService } from 'src/prisma/prisma.service';
import { AddAchievementDto } from './dto/add-achievement.dto';
export declare class AchievementsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUserAchievements(id: number): Promise<import(".prisma/client").Achievement[]>;
    addUserAchievements(achievement: AddAchievementDto, userId: number, goalId: number): Promise<import(".prisma/client").Achievement>;
}
