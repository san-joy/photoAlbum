import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersPhotoAlbumController, UsersPhotoAlbumService } from 'libs/users-photo-album/src';

@Module({
  imports: [],
  controllers: [AppController, UsersPhotoAlbumController],
  providers: [AppService, UsersPhotoAlbumService],
})
export class AppModule {}
