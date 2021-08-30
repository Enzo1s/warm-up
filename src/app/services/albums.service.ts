import { HttpClient } from '@angular/common/http';
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

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos`)
  }

  deletephoto(photoId: number) {
    return this.httpClient.delete(`${this.baseUrl}/photos/${photoId}`)
  }
}
