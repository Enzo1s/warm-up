import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged= false;
  errMsj= "esto es un error de login"
  user = {
    username: "",
    email: ""
  };
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if(this.authService.login(this.user)) {
      this.isLogged = true;
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'logged',
      })
      window.location.assign('/profile')
      /* this.router.navigate(['/profile']) */
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'user or password incorrect',
      })
    }
  }
}
