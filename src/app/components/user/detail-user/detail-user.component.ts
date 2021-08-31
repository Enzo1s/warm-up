import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  @Input() user = new User();
  @Input() access = ""
  @Output() return: EventEmitter<boolean>
  constructor() {
    this.return = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick() {
    this.return.emit(true);
  }
}
