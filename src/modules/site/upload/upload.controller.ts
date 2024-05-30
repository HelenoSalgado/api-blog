import {
    Controller,
    Post,
    UploadedFile,
    ParseFilePipeBuilder,
    HttpStatus,
    Req,
    UseInterceptors
  } from '@nestjs/common';
import { CustomUploadFileTypeValidator } from './validator';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from './upload.multer';
import { Req as Request } from 'src/types/express';
import { execFileSync } from 'child_process';
  
  const MAX_PROFILE_PICTURE_SIZE_IN_BYTES = 2 * 1024 * 1024;
  const VALID_UPLOADS_MIME_TYPES = ['image/jpeg', 'image/png'];
  
  @Controller('upload')
  @Public()
  export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file', multerConfig))
    public async uploadFile(@Req() req: Request, 
      @UploadedFile(
        new ParseFilePipeBuilder()
          .addValidator(
            new CustomUploadFileTypeValidator({
              fileType: VALID_UPLOADS_MIME_TYPES,
            }),
          )
          .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
          .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
      )
      file: Express.Multer.File,
    ) {

      execFileSync(`/tmp/push.sh ${req.headers.reponame} "file upload ${file.originalname}"`, {shell: true});
      
      return {
        repoImg: req.image,
        fileName: file.originalname
      };
    }
  }