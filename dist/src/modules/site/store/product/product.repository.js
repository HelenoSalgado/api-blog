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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/store/prisma.service");
let ProductRepository = class ProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ name, priceUnit, basicUnit, limited, active, taxPercentage }) {
        return this.prisma.product.create({
            data: {
                name,
                priceUnit,
                basicUnit,
                limited,
                active,
                taxPercentage
            }
        });
    }
    findOne(id) {
        return this.prisma.product.findUnique({
            where: { id }
        });
    }
    findAll(accountId) {
        return this.prisma.product.findMany({
            where: {}
        });
    }
    update(id, { name, priceUnit, basicUnit, limited, active, taxPercentage }) {
        return this.prisma.product.update({
            where: { id },
            data: {
                name,
                priceUnit,
                basicUnit,
                limited,
                active,
                taxPercentage
            },
        });
    }
    remove(id) {
        return this.prisma.product.delete({ where: { id } });
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaStoreService])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map