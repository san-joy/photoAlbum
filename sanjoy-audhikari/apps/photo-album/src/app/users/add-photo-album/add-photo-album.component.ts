import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sanjoy-audhikari-add-photo-album',
  templateUrl: './add-photo-album.component.html',
  styleUrls: ['./add-photo-album.component.scss'],
})
export class AddPhotoAlbumComponent implements OnInit {
  photoAlbumDetails!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddPhotoAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.photoAlbumDetails = this.formBuilder.group({
      photoAlbumTitle: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this.data.title = this.photoAlbumDetails.value.photoAlbumTitle
    this.dialogRef.close(this.data);
  }
}
