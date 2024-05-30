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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const cache_manager_1 = require("@nestjs/cache-manager");
let CategoryService = class CategoryService {
    constructor(repository, cacheManager) {
        this.repository = repository;
        this.cacheManager = cacheManager;
    }
    async create(createCategory) {
        await this.cacheManager.del('getCategories');
        const existCategory = await this.findOne(createCategory.name);
        if (existCategory)
            throw new common_1.ConflictException('Categoria já existe: crie categoria com um nome diferente');
        return await this.repository.create(createCategory);
    }
    async findAll(page, perPage) {
        const categories = await this.repository.findAll(page, perPage);
        return categories;
    }
    async findOne(name) {
        return await this.repository.findOne(name);
    }
    async update(id, updateCategory) {
        await this.cacheManager.del('getCategories');
        return await this.repository.update(Number(id), updateCategory);
    }
    async published(ids, published) {
        await this.cacheManager.del('getCategories');
        return await this.repository.published(ids, published);
    }
    async remove(ids) {
        await this.cacheManager.del('getCategories');
        return await this.repository.remove(ids);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository, Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map