/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UsersPhotoAlbumService } from './users-photo-album.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: PhotoAlbum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [UsersPhotoAlbumService]
    });
  });

  it('should ...', inject([UsersPhotoAlbumService], (service: UsersPhotoAlbumService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getUsers function', () => {
    const service: UsersPhotoAlbumService = TestBed.inject(UsersPhotoAlbumService);
    expect(service.getUsers).toBeTruthy();
   });
});
