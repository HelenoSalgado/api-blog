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
exports.ServiceRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/store/prisma.service");
let ServiceRepository = class ServiceRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ name, priceUnit, basicUnit, active, period, taxPercentage }) {
        return this.prisma.service.create({
            data: {
                name,
                priceUnit,
                active,
                taxPercentage,
                period,
                basicUnit
            }
        });
    }
    findOne(id) {
        return this.prisma.service.findUnique({
            where: { id }
        });
    }
    findAll(accountId) {
        return this.prisma.service.findMany({
            where: {}
        });
    }
    update(id, { name, priceUnit, active, taxPercentage, period, basicUnit }) {
        return this.prisma.service.update({
            where: { id },
            data: {
                name,
                priceUnit,
                active,
                taxPercentage,
                period,
                basicUnit
            },
        });
    }
    remove(id) {
        return this.prisma.service.delete({ where: { id } });
    }
};
ServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaStoreService])
], ServiceRepository);
exports.ServiceRepository = ServiceRepository;
//# sourceMappingURL=service.repository.js.map