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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const user_repository_1 = require("../site/user/user.repository");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(email, pass, req) {
        const user = await this.userService.findUserAuth(email);
        if (!user)
            throw new common_1.NotFoundException('Usuário não existe');
        const comparePass = (0, bcryptjs_1.compareSync)(pass, user.password);
        if (!comparePass)
            throw new common_1.UnauthorizedException('Email ou senha incorreta');
        const payload = {
            id: user.id,
            accountId: user.accountId,
            role: user.role,
            profile: {
                id: user.profile.id
            }
        };
        return {
            user: {
                id: user.id,
                username: user.firstName.toLowerCase(),
                profile: {
                    id: user.profile.id,
                    slug: user.profile.slug
                }
            },
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    ;
    async signInVerify(token) {
        return {
            access_token: await this.jwtService.verify(token),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map