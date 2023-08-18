import {
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('uploads[]', {
      storage: diskStorage({
        destination: join(__dirname, 'uploads'),
        filename: (req, file, cb) => {
          Logger.log(`🚀 Application is touching balls`);

          const filename: string =
            path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
          const extension: string = path.parse(file.originalname).ext;
          cb(null, `${filename}${extension}`);
        },
      }),
    })
  )
  uploadFile(@UploadedFile() file: unknown) {
    console.log('HEEEEEEE', file);
    return file;
  }
}
