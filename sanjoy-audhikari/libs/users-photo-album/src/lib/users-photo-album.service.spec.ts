import { Test } from '@nestjs/testing';
import { UsersPhotoAlbumService } from './users-photo-album.service';


describe('UsersPhotoAlbumService', () => {
  let service: UsersPhotoAlbumService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersPhotoAlbumService],
    }).compile();

    service = module.get(UsersPhotoAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
