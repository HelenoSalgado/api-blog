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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/blog/prisma.service");
let UserRepository = class UserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ accountId, firstName, lastName, username, email, password, jobTitle }) {
        return this.prisma.user.create({
            data: {
                firstName,
                lastName,
                username,
                email,
                password,
                jobTitle,
                account: {
                    connect: {
                        id: accountId
                    }
                }
            },
            select: {
                id: true,
                firstName: true,
                username: true,
                email: true,
                jobTitle: true,
                role: true,
                userGroup: {
                    select: {
                        limitUsers: true,
                        groupType: {
                            select: {
                                role: true
                            }
                        }
                    }
                }
            },
        });
    }
    findAll() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                firstName: true,
                email: true,
                jobTitle: true,
                confirmed: true,
                role: true,
                profile: true,
                userGroup: {
                    select: {
                        limitUsers: true,
                        groupType: {
                            select: {
                                role: true
                            }
                        }
                    }
                }
            },
        });
    }
    async findUserAuth(email) {
        return this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                accountId: true,
                firstName: true,
                email: true,
                password: true,
                role: true,
                profile: {
                    select: {
                        id: true,
                        slug: true
                    }
                }
            },
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                firstName: true,
                email: true,
                jobTitle: true,
                confirmed: true,
                role: true,
                userGroup: {
                    select: {
                        limitUsers: true,
                        groupType: {
                            select: {
                                role: true
                            }
                        }
                    }
                }
            },
        });
    }
    update(id, { firstName, lastName, jobTitle, confirmed }) {
        return this.prisma.user.update({
            where: { id },
            data: {
                firstName,
                lastName,
                jobTitle,
                confirmed
            },
        });
    }
    remove(id) {
        return this.prisma.user.delete({
            where: { id },
            include: {
                profile: true
            }
        });
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map