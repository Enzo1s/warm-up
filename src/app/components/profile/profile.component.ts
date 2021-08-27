import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLogged') === "true") {
      var userLogin = sessionStorage.getItem('user');
      this.user = userLogin ? JSON.parse(userLogin) : new User();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you are not logged in (redirect)',
      })
      this.router.navigate(['/home'])
    }
  }

}
