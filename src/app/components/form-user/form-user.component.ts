import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/Address';
import { Company } from 'src/app/models/Company';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  user = new User();
  address = new Address();
  company = new Company();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSave(){
    var username = sessionStorage.getItem('user')
    if(username) {
      this.user.username = username
    }
    this.user.address = this.address
    this.user.company = this.company
    console.log(this.user)
    localStorage.setItem(`${localStorage.length+1}`, JSON.stringify(this.user))
    sessionStorage.setItem('isLogged','true')
    this.router.navigate(['/profile'])
  }
}
