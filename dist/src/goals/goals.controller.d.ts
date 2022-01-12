import { AddGoalDto } from './dto/add-goal.dto';
import { GoalsService } from './goals.service';
export declare class GoalsController {
    private goalsService;
    constructor(goalsService: GoalsService);
    getGoals(req: any): Promise<import(".prisma/client").Goal[]>;
    postNotes(req: any, addGoalDto: AddGoalDto): void;
}
