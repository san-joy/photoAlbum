import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddPhotoAlbumComponent } from './add-photo-album.component';

describe('AddPhotoAlbumComponent', () => {
  let component: AddPhotoAlbumComponent;
  let fixture: ComponentFixture<AddPhotoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPhotoAlbumComponent],
      imports: [ ReactiveFormsModule ],
      providers: [{ provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: [] }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPhotoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
