import { Module } from '@nestjs/common';

import { UploadController } from '../upload/upload.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
