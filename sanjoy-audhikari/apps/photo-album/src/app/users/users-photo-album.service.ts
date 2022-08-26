import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { albums, users } from '@prisma/client';

@Injectable({
  providedIn: 'root'
})
export class UsersPhotoAlbumService {

  private API_URL: string = "http://localhost:3333/api"

  constructor(
    public http: HttpClient
  ) { }

  public getUsers(): Observable<users[]> {
    return this.http.get<users[]>(`${this.API_URL}/users`)
  }

  public getUserAlbums(userId: number): Observable<albums[]> {
    return this.http.get<albums[]>(`${this.API_URL}/users/${userId}`);
  }

  public createPhotoAlbum(albums: { title: string, userId: number }) {
    const { title, userId } = albums;
    return this.http.post<{ title: string, userId: number }>(`${this.API_URL}/users/createPhotoAlbum`, albums);
  }
}
