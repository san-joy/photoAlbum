import { Module } from '@nestjs/common';
import { UsersPhotoAlbumController } from './users-photo-album.controller';
import { UsersPhotoAlbumService } from './users-photo-album.service';

@Module({
  controllers: [UsersPhotoAlbumController],
  providers: [UsersPhotoAlbumService],
  exports: [UsersPhotoAlbumService],
})
export class UsersPhotoAlbumModule {}
