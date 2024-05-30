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
exports.AccountRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/blog/prisma.service");
const client_1 = require("@prisma-blog/prisma/client");
let AccountRepository = class AccountRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ company, email, user, planId }) {
        return this.prisma.account.create({
            data: {
                email,
                company: {
                    create: { name: company.name, CNPJ: company.CNPJ, logo: company.logo,
                        contact: {
                            create: { whatsApp: '', celular: '', email: '', tel: '' }
                        }
                    }
                },
                plan: {
                    connect: { id: planId }
                },
                users: {
                    create: {
                        firstName: user.firstName, lastName: user.lastName, email: user.email,
                        password: user.password, username: user.username, role: client_1.Role.ADMIN,
                        profile: {
                            create: {
                                name: user.firstName,
                                slug: user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase()
                            }
                        }
                    }
                },
            },
            select: {
                id: true,
                email: true,
                plan: {
                    select: {
                        name: true,
                        limitUsers: true,
                        active: true
                    }
                },
                confirmed: true,
            }
        });
    }
    findAll() {
        return this.prisma.account.findMany({
            select: {
                id: true,
                company: true,
                email: true,
                confirmed: true,
                plan: {
                    select: {
                        name: true,
                        active: true,
                        limitUsers: true,
                        userGroup: {
                            select: {
                                user: {
                                    select: {
                                        id: true,
                                        firstName: true,
                                        email: true,
                                        role: true
                                    }
                                },
                                limitUsers: true,
                                groupType: {
                                    select: {
                                        role: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    async findEmail(email) {
        return this.prisma.account.findUnique({
            where: { email },
            select: {
                email: true
            },
        });
    }
    async findUserEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
            select: {
                email: true
            },
        });
    }
    findOne(id) {
        return this.prisma.account.findUnique({
            where: { id },
            select: {
                id: true,
                company: true,
                email: true,
                confirmed: true,
                users: {
                    select: {
                        id: true,
                        firstName: true,
                        email: true,
                        role: true
                    }
                },
                plan: {
                    select: {
                        name: true,
                        active: true,
                        limitUsers: true,
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
                    }
                }
            },
        });
    }
    update(id, { planId }) {
        return this.prisma.account.update({
            where: { id },
            data: {
                planId
            },
            select: {
                users: {
                    select: {
                        id: true,
                        firstName: true,
                        email: true,
                        role: true
                    }
                },
                plan: {
                    select: {
                        name: true,
                        active: true,
                        limitUsers: true,
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
                    }
                }
            }
        });
    }
    remove(id) {
        return this.prisma.account.delete({
            where: { id },
            include: {
                company: true,
                posts: true,
                sendNewlatter: true,
                users: {
                    include: {
                        profile: true
                    }
                },
            }
        });
    }
};
AccountRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], AccountRepository);
exports.AccountRepository = AccountRepository;
//# sourceMappingURL=account.repository.js.map