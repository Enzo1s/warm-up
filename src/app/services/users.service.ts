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
  constructor(private httpClient:HttpClient) { }

  public saveUsers() {
    var users: User[]
    this.httpClient.get<User[]>(`${this.baseUrl}/users`).subscribe((res) => {
      users = res;
      users.forEach((user) => localStorage.setItem(`${user.id}`,JSON.stringify(user)))
    })
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  public getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`)
  }

  public getUserByUsername(username: string): User{
    var user = new User();
    for (let index = 0; index <= localStorage.length; index++) {
      var userAux = localStorage.getItem(`${index}`)
      if(userAux != null) {
        user = userAux.indexOf(`"${username}"`) > 0 ? JSON.parse(userAux) : null;
        if(user != null) {
          return user
        }
      }
    }
    return user
  }
}
