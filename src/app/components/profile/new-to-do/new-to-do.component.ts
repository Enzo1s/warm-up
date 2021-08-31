import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDos } from 'src/app/models/ToDos';
import { User } from 'src/app/models/User';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {

  @Input() user = new User()
  toDo = new ToDos()
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  createToDo(f:NgForm) {
    this.toDo.userId = this.user.id
    this.toDoService.createToDo(this.toDo)
  }
}
