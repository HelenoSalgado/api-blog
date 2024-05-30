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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const msgPost_1 = require("../../../../constants/msgPost");
const category_dto_1 = require("./category.dto");
const public_decorator_1 = require("../../../auth/decorators/public.decorator");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(createCategory) {
        return await this.categoryService.create(createCategory);
    }
    async findAll(page = 1, perPage = 10) {
        const categories = await this.categoryService.findAll(page, perPage);
        if (!categories)
            throw new common_1.NotFoundException(msgPost_1.msg.postsNotExist);
        return categories;
    }
    async findOne(name) {
        const category = await this.categoryService.findOne(name);
        if (!category)
            throw new common_1.NotFoundException(msgPost_1.msg.postNotExist);
        return category;
    }
    async update(id, updateCategoryDto) {
        await this.categoryService.update(id, updateCategoryDto);
    }
    async published(ids, published) {
        await this.categoryService.published(ids[0], published);
    }
    async remove(ids) {
        await this.categoryService.remove(ids[0]);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('perPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('published/:ids'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('ids', new common_1.ParseArrayPipe({
        items: (Array), separator: '[]',
    }))),
    __param(1, (0, common_1.Body)('published')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "published", null);
__decorate([
    (0, common_1.Delete)(':ids'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('ids', new common_1.ParseArrayPipe({
        items: (Array), separator: '[]',
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map