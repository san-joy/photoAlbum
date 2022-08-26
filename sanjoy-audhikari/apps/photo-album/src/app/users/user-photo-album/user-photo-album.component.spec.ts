import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from '@sanjoy-audhikari/material';
import { UserPhotoAlbumComponent } from './user-photo-album.component';

describe('UserPhotoAlbumComponent', () => {
  let component: UserPhotoAlbumComponent;
  let fixture: ComponentFixture<UserPhotoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, HttpClientTestingModule],
      declarations: [UserPhotoAlbumComponent],
      providers: [MatDialog]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhotoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
