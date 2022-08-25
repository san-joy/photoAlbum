import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoAlbumComponent } from './user-photo-album.component';

describe('UserPhotoAlbumComponent', () => {
  let component: UserPhotoAlbumComponent;
  let fixture: ComponentFixture<UserPhotoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPhotoAlbumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhotoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
