import { PrismaService } from 'src/prisma/prisma.service';
import { AddGoalDto } from './dto/add-goal.dto';
export declare class GoalsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUserGoals(id: number): Promise<import(".prisma/client").Goal[]>;
    addUserGoals(goal: AddGoalDto, userId: number): Promise<import(".prisma/client").Goal>;
}
