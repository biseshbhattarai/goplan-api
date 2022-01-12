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
exports.RemindersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RemindersService = class RemindersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUserReminders(id) {
        return this.prismaService.reminder.findMany({ where: { userId: id } });
    }
    async addUserReminders(reminder, userId, goalId) {
        const data = Object.assign(Object.assign({}, reminder), { goalId: goalId, userId: userId, createDate: new Date(reminder.createDate), remindDate: new Date(reminder.remindDate) });
        return await this.prismaService.reminder.create({ data: data });
    }
};
RemindersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RemindersService);
exports.RemindersService = RemindersService;
//# sourceMappingURL=reminders.service.js.map