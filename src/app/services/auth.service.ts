import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserLogin): boolean {
    for (let index = 0; index < localStorage.length; index++) {
      var searchUser = localStorage.getItem(`${index}`);
      if (searchUser) {
        if (user.username == JSON.parse(searchUser).username && user.email == JSON.parse(searchUser).email) {
          sessionStorage.setItem('isLogged','true')
          sessionStorage.setItem('user', searchUser);
          return true;
        }
      }
    }
    return false
  }

  register(user: User): boolean {
    localStorage.getItem(user.username);
    const userlocal = localStorage.getItem(user.username);
    if (userlocal) {
      return false;
    }
    localStorage.setItem(user.username, JSON.stringify(user));
    return true;
  }

  logout(): boolean{
    sessionStorage.removeItem('user')
    sessionStorage.setItem('isLogged','flase')
    if(!sessionStorage.getItem('user')) {
      return true
    }
    return false
  }
}
