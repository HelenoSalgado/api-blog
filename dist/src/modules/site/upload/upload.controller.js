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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const validator_1 = require("./validator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const upload_multer_1 = require("./upload.multer");
const child_process_1 = require("child_process");
const MAX_PROFILE_PICTURE_SIZE_IN_BYTES = 2 * 1024 * 1024;
const VALID_UPLOADS_MIME_TYPES = ['image/jpeg', 'image/png'];
let UploadController = class UploadController {
    async uploadFile(req, file) {
        (0, child_process_1.execFileSync)(`/tmp/push.sh ${req.headers.reponame} "file upload ${file.originalname}"`, { shell: true });
        return {
            repoImg: req.image,
            fileName: file.originalname
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', upload_multer_1.default)),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addValidator(new validator_1.CustomUploadFileTypeValidator({
        fileType: VALID_UPLOADS_MIME_TYPES,
    }))
        .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
        .build({ errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    (0, public_decorator_1.Public)()
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map