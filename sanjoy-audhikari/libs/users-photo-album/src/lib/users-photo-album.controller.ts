import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersPhotoAlbumService } from './users-photo-album.service';
import { albums } from '@prisma/client';

@Controller('users')
export class UsersPhotoAlbumController {
  constructor(private usersPhotoAlbumService: UsersPhotoAlbumService) { }

  @Get()
  public async getAllUsers() {
    return this.usersPhotoAlbumService.getAllUsers();
  }

  @Get(":id")
  public async getAllPhotoAlbums(@Param() userId) {
    return this.usersPhotoAlbumService.getAllPhotoAlbums(parseInt(userId.id));
  }

  @Post("createPhotoAlbum")
  async createPhotoAlbum(@Body() albums: { title: string, userId: number }): Promise<albums> {
    const { title, userId } = albums;
    return this.usersPhotoAlbumService.createPhotoAlbum({
      title,
      userId
    })
  }
}
