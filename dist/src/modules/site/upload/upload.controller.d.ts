/// <reference types="multer" />
import { Req as Request } from 'src/types/express';
export declare class UploadController {
    uploadFile(req: Request, file: Express.Multer.File): Promise<{
        repoImg: string;
        fileName: string;
    }>;
}
