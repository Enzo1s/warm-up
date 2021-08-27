import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = false;
  
  newUser = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = sessionStorage.getItem("isLogged") ? true: false;
  }

  onRegister(){
    
    const register = this.authService.register(this.newUser);
    if(register) {
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
        text: 'user created',
      })
     } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'user or email already exists',
      })
     }
  }
}
