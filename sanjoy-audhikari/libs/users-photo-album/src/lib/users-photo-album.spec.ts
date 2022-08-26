import { Test } from '@nestjs/testing';
import { UsersPhotoAlbumController } from './users-photo-album.controller';
import { UsersPhotoAlbumService } from './users-photo-album.service';


describe('UsersPhotoAlbumController', () => {
  let controller: UsersPhotoAlbumController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersPhotoAlbumService],
      controllers: [UsersPhotoAlbumController],
    }).compile();

    controller = module.get(UsersPhotoAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
