import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  baseUrl = environment.baseURL
  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.baseUrl}/albums`)
  }

  getAlbumsByUserId(userId: number): Observable<Album[]> {
    const params = new HttpParams().set('userId',userId)
    return this.httpClient.get<Album[]>(`${this.baseUrl}/albums`, {params})
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`)
  }

  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(`${this.baseUrl}/albums`,album)
  }

  deletephoto(photoId: number) {
    return this.httpClient.delete(`${this.baseUrl}/photos/${photoId}`)
  }
}
