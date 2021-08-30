import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isLogged = false;
  constructor(private authService: AuthService, private router:Router) { }

  ngAfterViewInit(): void {
    this.isLogged = sessionStorage.getItem('isLogged') === "true" ? true:false;
  }

  ngOnInit(): void {
    this.isLogged = sessionStorage.getItem('isLogged') === "true" ? true:false;
  }

  logOut() {
    const logout = this.authService.logout();
    sessionStorage.setItem('isLogged','false')
    if(logout) {
      Swal.fire({
        icon: 'success',
        title: 'Good Bye',
        text: 'redirected',
      })
      this.isLogged = false
      this.router.navigate(['/home'])
    }
  }
}
