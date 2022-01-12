"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AchievementsService = class AchievementsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUserAchievements(id) {
        return this.prismaService.achievement.findMany({ where: { userId: id } });
    }
    async addUserAchievements(achievement, userId, goalId) {
        const data = Object.assign(Object.assign({}, achievement), { goalId: goalId, userId: userId });
        return await this.prismaService.achievement.create({ data: data });
    }
};
AchievementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AchievementsService);
exports.AchievementsService = AchievementsService;
//# sourceMappingURL=achievements.service.js.map