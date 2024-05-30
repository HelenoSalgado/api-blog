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
exports.CollectionController = void 0;
const common_1 = require("@nestjs/common");
const collection_service_1 = require("./collection.service");
const msgCollection_1 = require("../../../../constants/msgCollection");
const collection_dto_1 = require("./collection.dto");
const public_decorator_1 = require("../../../auth/decorators/public.decorator");
let CollectionController = class CollectionController {
    constructor(collectionService) {
        this.collectionService = collectionService;
    }
    async create(createCollection) {
        return await this.collectionService.create(createCollection);
    }
    async findAll() {
        const posts = await this.collectionService.findAll();
        if (!posts)
            throw new common_1.NotFoundException(msgCollection_1.msg.collectionNotExist);
        return posts;
    }
    async findOne(slug) {
        const collection = await this.collectionService.findOne(slug);
        if (!collection)
            throw new common_1.NotFoundException(msgCollection_1.msg.collectionNotExist);
        return collection;
    }
    async update(id, updateCollection) {
        await this.collectionService.update(id, updateCollection);
        return { message: msgCollection_1.msg.collectionUpdated, statusCode: 200 };
    }
    async remove(id) {
        await this.collectionService.remove(id);
        return { message: msgCollection_1.msg.collectionDeletedSucess, statusCode: 200 };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [collection_dto_1.CreateCollectionDto]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, collection_dto_1.UpdateCollectionDto]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CollectionController.prototype, "remove", null);
CollectionController = __decorate([
    (0, common_1.Controller)('collection'),
    __metadata("design:paramtypes", [collection_service_1.CollectionService])
], CollectionController);
exports.CollectionController = CollectionController;
//# sourceMappingURL=collection.controller.js.map