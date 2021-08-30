import { Injectable } from '@angular/core';

import { User } from '../models/User';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserLogin): boolean {
    
      var searchUser = localStorage.getItem(`${user.username}`);
      if (searchUser) {
        if (user.password == JSON.parse(searchUser).password) {
          sessionStorage.setItem('isLogged','true')
          sessionStorage.setItem('user', user.username);
          return true;
        }
      }
    
    return false
  }

  register(user: UserLogin): boolean {
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
    sessionStorage.setItem('isLogged','false')
    if(!sessionStorage.getItem('user')) {
      return true
    }
    return false
  }
}
