import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isLogged = sessionStorage.getItem('isLogged') === "true" ? true:false;
  }

  ngAfterContentInit(){
    console.log("se ejecuto ngOnChange")
  }

  logOut() {
    const logout = this.authService.logout();
    if(logout) {
      Swal.fire({
        icon: 'success',
        title: 'Good Bye',
        text: 'redirected',
      })
      this.router.navigate(['/home'])
    }
  }
}
