import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddPhotoAlbumComponent } from '../add-photo-album/add-photo-album.component';

export interface Albums {
  userId: number;
  id: number;
  title: string;
}

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

}

@Component({
  selector: 'sanjoy-audhikari-user-photo-album',
  templateUrl: './user-photo-album.component.html',
  styleUrls: ['./user-photo-album.component.scss'],
})
export class UserPhotoAlbumComponent implements OnInit {
  userId: any;
  userAlbums: Albums[] = [];
  photosForAlbum: Photos[] = [];
  userAlbumPhotos:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
    ) {
    }

  albums = [
  {userId:1, id:1, title:"quidem molestiae enim"},
  {userId:1, id:2, title:"nesciunt quia et doloremque"},
  {userId:1, id:3, title:"nesciunt quia et doloremque"},
  {userId:3, id:24, title:"dolores ut et facere placeat"}]

  photos = [
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 1, id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", url: "https://via.placeholder.com/600/92c952", thumbnailUrl: "https://via.placeholder.com/150/92c952"},
    {albumId: 1, id: 2, title: "reprehenderit est deserunt velit ipsam", url: "https://via.placeholder.com/600/771796", thumbnailUrl: "https://via.placeholder.com/150/771796"},
    {albumId: 2, id: 3, title: "officia porro iure quia iusto qui ipsa ut modi",url: "https://via.placeholder.com/600/24f355", thumbnailUrl: "https://via.placeholder.com/150/24f355"}]

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    const userAlbums = this.albums.filter((album) => { return album.userId == this.userId });
    this.userAlbumPhotos = new Map(userAlbums.map(i => [i.id, {albumTitle: i.title, albumPhotos : []}]));
    for(let albumId of this.userAlbumPhotos.keys()){
      this.userAlbumPhotos.get(albumId).albumPhotos.push(...this.photos.filter(photo => {return albumId == photo.albumId}));
    }
    this.userAlbumPhotos = Array.from(this.userAlbumPhotos.values());
  }

  addPhotoAlbum(){
    const dialogRef = this.dialog.open(AddPhotoAlbumComponent, {
      width: "350px",
      data: { userId: this.userId }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userAlbumPhotos.push({albumTitle: result.title})
      }
    })
  }
}
