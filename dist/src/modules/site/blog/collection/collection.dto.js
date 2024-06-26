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
exports.UpdateCollectionDto = exports.CreateCollectionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCollectionDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateCollectionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCollectionDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCollectionDto.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCollectionDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateCollectionDto.prototype, "posts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateCollectionDto.prototype, "published", void 0);
exports.CreateCollectionDto = CreateCollectionDto;
class UpdateCollectionDto extends (0, swagger_1.PartialType)(CreateCollectionDto) {
}
exports.UpdateCollectionDto = UpdateCollectionDto;
//# sourceMappingURL=collection.dto.js.map