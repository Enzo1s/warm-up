import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = new User()
  form = false
  isLogged= false
  singIn = true
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
    var logged = sessionStorage.getItem('isLogged')
    this.isLogged = logged == 'true' ? true: false;
    this.userService.saveUsers();
    this.getUser();
  }

  getUser(){
    var userAux = sessionStorage.getItem('user');
    if(userAux) {
      this.user = this.userService.getUserByUsername(userAux)
    }
  }

  onClick(status: string) {
    if("register")
    this.singIn = status === "register" ? false : true
  }

  registered($event:boolean){
    if($event) {
      this.form = true
    }
  }
  
  redirect($event: boolean) {
    var userlogin = sessionStorage.getItem('user')
    console.log(userlogin)
    if(userlogin) {
      this.user = this.userService.getUserByUsername(`${userlogin}`)
      console.log(this.user)
      this.form = this.user.name != null ? true:false
    }
    if($event && this.form) {
      window.location.assign('/profile')
      /* this.router.navigate(['/profile']) */
    } else {
      if($event && !this.form){
        this.form = true
      }
    }
  }
}
