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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const achievements_service_1 = require("./achievements.service");
const add_achievement_dto_1 = require("./dto/add-achievement.dto");
let AchievementsController = class AchievementsController {
    constructor(achievementsService) {
        this.achievementsService = achievementsService;
    }
    getGoals(req) {
        return this.achievementsService.getUserAchievements(req.user.id);
    }
    postNotes(req, addAchievementDto) {
        this.achievementsService.addUserAchievements(addAchievementDto, req.user.id, +req.params.goalId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AchievementsController.prototype, "getGoals", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create/:goalId'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_achievement_dto_1.AddAchievementDto]),
    __metadata("design:returntype", void 0)
], AchievementsController.prototype, "postNotes", null);
AchievementsController = __decorate([
    (0, common_1.Controller)('api/achievements'),
    __metadata("design:paramtypes", [achievements_service_1.AchievementsService])
], AchievementsController);
exports.AchievementsController = AchievementsController;
//# sourceMappingURL=achievements.controller.js.map