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
exports.ClientRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/store/prisma.service");
let ClientRepository = class ClientRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create({ firstName, lastName, VAT_ID, email, whatsApp, company, accountId }) {
        return this.prisma.client.create({
            data: {
                firstName,
                lastName,
                VAT_ID,
                company,
                email,
                whatsApp,
                accountId
            }
        });
    }
    async verifyClient(email, accountId) {
        return this.prisma.client.findFirst({
            where: { email, AND: { accountId } },
            select: {
                id: true
            },
        });
    }
    findOne(id, accountId) {
        return this.prisma.client.findFirst({
            where: { id, AND: { accountId } },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                company: true,
                email: true,
                whatsApp: true,
                Shipment: {
                    select: {
                        producSale: true,
                        paymentDetails: true,
                        shipmentStatus: true,
                        address: true
                    }
                }
            }
        });
    }
    findAll(accountId) {
        return this.prisma.client.findMany({
            where: { accountId },
            select: {
                id: true,
                firstName: true,
                email: true,
                whatsApp: true
            }
        });
    }
    update(id, { firstName, lastName, company }) {
        return this.prisma.client.update({
            where: { id },
            data: {
                firstName,
                lastName,
                company
            },
        });
    }
    remove(id) {
        return this.prisma.client.delete({ where: { id } });
    }
};
ClientRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaStoreService])
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map