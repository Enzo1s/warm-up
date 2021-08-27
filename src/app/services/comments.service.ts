import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getCommentsByPost(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.baseUrl}/posts/${postId}/comments`)
  }

  getPostComment(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.baseUrl}/posts/${postId}`)
  }
}
