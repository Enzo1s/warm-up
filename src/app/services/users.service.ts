import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseURL;
  constructor(private http:HttpClient) { }

  public getUsers() {
    var users: User[]
    this.http.get<User[]>(`${this.baseUrl}/users`).subscribe((res) => {
      users = res;
      users.forEach((user) => localStorage.setItem(`${user.id}`,JSON.stringify(user)))
    })
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
  }
}
