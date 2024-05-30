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
exports.GroupRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/blog/prisma.service");
let GroupRepository = class GroupRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findOne(id) {
        return this.prisma.userGroup.findUnique({
            where: { id },
            select: {
                plan: {
                    select: {
                        name: true,
                        limitUsers: true
                    }
                },
                limitUsers: true,
                groupType: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }
    async findAll() {
        return await this.prisma.userGroup.findMany({
            select: {
                plan: {
                    select: {
                        name: true,
                        limitUsers: true,
                    }
                },
                limitUsers: true,
                groupType: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }
    update(id, { groupTypeId }) {
        return this.prisma.userGroup.update({
            where: { id },
            data: {
                groupType: {
                    connect: { id: groupTypeId }
                }
            }
        });
    }
};
GroupRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaBlogService])
], GroupRepository);
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map