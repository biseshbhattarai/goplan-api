import { AchievementsService } from './achievements.service';
import { AddAchievementDto } from './dto/add-achievement.dto';
export declare class AchievementsController {
    private achievementsService;
    constructor(achievementsService: AchievementsService);
    getGoals(req: any): Promise<import(".prisma/client").Achievement[]>;
    postNotes(req: any, addAchievementDto: AddAchievementDto): void;
}
