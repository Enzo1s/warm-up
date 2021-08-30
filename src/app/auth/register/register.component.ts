import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() register: EventEmitter<boolean>;
  isLogged = false;
  
  newUser = new UserLogin();
  constructor(
    private router: Router,
    private authService: AuthService) { 
      this.register = new EventEmitter()
    }

  ngOnInit(): void {
    var logged = sessionStorage.getItem('isLogged')
    this.isLogged = logged == 'true' ? true: false;
  }

  onRegister(){
    const register = this.authService.register(this.newUser);
    if(register) {
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'user created',
      })
      this.authService.login(this.newUser)
      this.register.emit(true)
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'user or email already exists',
      })
      /* this.register.emit(false) */
     }
  }
}
