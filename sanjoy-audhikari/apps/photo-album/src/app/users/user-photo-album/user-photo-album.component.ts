import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddPhotoAlbumComponent } from '../add-photo-album/add-photo-album.component';
import { UsersPhotoAlbumService } from '../users-photo-album.service';

@Component({
  selector: 'sanjoy-audhikari-user-photo-album',
  templateUrl: './user-photo-album.component.html',
  styleUrls: ['./user-photo-album.component.scss'],
})
export class UserPhotoAlbumComponent implements OnInit, OnDestroy {
  userId: any;
  userAlbumPhotos: any;
  usersPhotoAlbumSubscription!: Subscription;
  dialogSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public usersPhotoAlbumService: UsersPhotoAlbumService,
    private snackBar: MatSnackBar
  ) {
  }
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.usersPhotoAlbumSubscription = this.usersPhotoAlbumService.getUserAlbums(this.userId)
      .subscribe({
        next: (data) => {
          this.userAlbumPhotos = data;
        },
        error: () => {
          this.snackBar.open("Error retrieving data!", "",
            {
              duration: 2000,
              panelClass: ['mat-toolbar', 'mat-warn']
            })
        }
      })

  }

  addPhotoAlbum() {
    const dialogRef = this.dialog.open(AddPhotoAlbumComponent, {
      width: "350px",
      data: { userId: this.userId }
    })
    this.dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userAlbumPhotos.push({ title: result.title })
        this.usersPhotoAlbumSubscription = this.usersPhotoAlbumService.createPhotoAlbum({ title: result.title, userId: parseInt(result.userId) })
          .subscribe({
            next: () => {
              this.snackBar.open("New album added successfully!", "",
                {
                  duration: 2000,
                  panelClass: ['mat-toolbar', 'mat-primary']
                })
            },
            error: () => {
              this.snackBar.open("Error with adding album!", "",
                {
                  duration: 2000,
                  panelClass: ['mat-toolbar', 'mat-warn']
                })
            }
          })
      }
    })
  }

  ngOnDestroy(): void {
    if (this.usersPhotoAlbumSubscription) {
      this.usersPhotoAlbumSubscription.unsubscribe();
    }
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }
}
