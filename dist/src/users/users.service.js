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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSingleUser(arg) {
        if (typeof arg == 'string') {
            return await this.prisma.user.findFirst({ where: { email: arg } });
        }
        return await this.prisma.user.findFirst({ where: { id: arg } });
    }
    async encrptPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            return encryptedPassword;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(user) {
        try {
            const password = await this.encrptPassword(user.password);
            await this.prisma.user.create({
                data: Object.assign(Object.assign({}, user), { password, dob: new Date(user.dob) }),
            });
        }
        catch (error) {
            throw error;
        }
    }
    async createUserProfile(profile, image, userId) {
        const data = Object.assign(Object.assign({}, profile), { profileImage: image, userId: userId });
        return await this.prisma.profile.create({ data: data });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map