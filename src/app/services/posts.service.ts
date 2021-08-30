import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = environment.baseURL;
  constructor(private httpClient:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`)
  }

  createPost(post: Post): Observable<Post> {
    /* localStorage.setItem(`postUser${post.userId}`,JSON.stringify(post)) */
    return this.httpClient.post<Post>(`${this.baseUrl}/posts`,post)
  }

  getPostByUserId(userId: number): Observable<Post[]> {
    const params = new HttpParams().set('userId',userId)
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`,{params})
  }
  /* getMyPost(userId: number): Post[] {
    var findPost = localStorage.getItem(`postUser${userId}`)
  } */
}
