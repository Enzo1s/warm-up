import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDos } from '../models/ToDos';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  baseUrl = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getToDos(): Observable<ToDos[]> {
    return this.httpClient.get<ToDos[]>(`${this.baseUrl}/todos`)
  }

  getToDosByUser(userId:number): Observable<ToDos[]> {
    const params = new HttpParams().set('userId', userId)
    return this.httpClient.get<ToDos[]>(`${this.baseUrl}/todos`, {params})
  }

  createToDo(toDo: ToDos): Observable<ToDos> {
    return this.httpClient.post<ToDos>(`${this.baseUrl}/todos`, toDo)
  }

  updateToDo(toDo: ToDos): Observable<ToDos> {
    return this.httpClient.put<ToDos>(`${this.baseUrl}/todos/${toDo.id}`,toDo)
  }
}
