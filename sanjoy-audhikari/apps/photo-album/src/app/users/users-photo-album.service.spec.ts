/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UsersPhotoAlbumService } from './users-photo-album.service';

describe('Service: PhotoAlbum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersPhotoAlbumService]
    });
  });

  it('should ...', inject([UsersPhotoAlbumService], (service: UsersPhotoAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
