"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUploadFileTypeValidator = void 0;
const common_1 = require("@nestjs/common");
class CustomUploadFileTypeValidator extends common_1.FileValidator {
    constructor(validationOptions) {
        super(validationOptions);
        this.validationOptions = validationOptions;
        this._allowedMimeTypes = this.validationOptions.fileType;
    }
    isValid(file) {
        const response = file.mimetype;
        return this._allowedMimeTypes.includes(response);
    }
    buildErrorMessage() {
        return `Upload not allowed. Upload only files of type: ${this._allowedMimeTypes.join(', ')}`;
    }
}
exports.CustomUploadFileTypeValidator = CustomUploadFileTypeValidator;
//# sourceMappingURL=validator.js.map