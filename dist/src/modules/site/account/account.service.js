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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const account_repository_1 = require("./account.repository");
const bcryptjs_1 = require("bcryptjs");
let AccountService = class AccountService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createAccount) {
        const accountExist = await this.repository.findEmail(createAccount.email);
        if (accountExist)
            throw new common_1.HttpException("Conta já existe", 409);
        const userExist = await this.repository.findUserEmail(createAccount.user.email);
        if (userExist)
            throw new common_1.HttpException("Usuário já existe em outra conta", 409);
        const salt = (0, bcryptjs_1.genSaltSync)(12);
        createAccount.user.password = (0, bcryptjs_1.hashSync)(createAccount.user.password, salt);
        return await this.repository.create(createAccount);
    }
    async findAll() {
        return await this.repository.findAll();
    }
    async findOne(id) {
        return await this.repository.findOne(Number(id));
    }
    async update(id, updateAccount) {
        return await this.repository.update(Number(id), updateAccount);
    }
    async remove(id) {
        await this.repository.remove(Number(id));
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_repository_1.AccountRepository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map