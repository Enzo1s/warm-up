import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  collapse = 0;
  users: User[] = []
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users)
    })
  }

  collapseOne(id: number) {
    this.collapse = id;
  }

}
