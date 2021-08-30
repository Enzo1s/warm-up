import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged= false;
  userLogin = new UserLogin();
  @Output() logged: EventEmitter<boolean>;
  constructor(private authService:AuthService, private router:Router) {
    this.logged = new EventEmitter();    
   }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    var session = sessionStorage.getItem('isLogged')
    this.logged.emit(session ? Boolean(session):false);
  }

  onLogin() {
    if(this.authService.login(this.userLogin)) {
      this.isLogged = true;
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'logged',
      })
      /* this.router.navigate(['/profile']) */
      this.logged.emit(true)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'user or password incorrect',
      })
      this.logged.emit(false)
    }
  }
}
