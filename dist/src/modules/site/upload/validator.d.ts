/// <reference types="multer" />
import { FileValidator } from '@nestjs/common';
export interface CustomUploadTypeValidatorOptions {
    fileType: string[];
}
export declare class CustomUploadFileTypeValidator extends FileValidator {
    protected readonly validationOptions: CustomUploadTypeValidatorOptions;
    private _allowedMimeTypes;
    constructor(validationOptions: CustomUploadTypeValidatorOptions);
    isValid(file?: Express.Multer.File): boolean;
    buildErrorMessage(): string;
}
