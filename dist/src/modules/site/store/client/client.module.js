"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const client_controller_1 = require("./client.controller");
const prisma_module_1 = require("../../../prisma/store/prisma.module");
const client_service_1 = require("./client.service");
const client_repository_1 = require("./client.repository");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService, client_repository_1.ClientRepository],
        imports: [prisma_module_1.PrismaStoreModule],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map