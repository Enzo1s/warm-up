import { Component, Input, OnInit } from '@angular/core';
import { ToDos } from 'src/app/models/ToDos';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() todo = new ToDos()
  style = 'text-white bg-success'
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    if (this.todo.completed) {
      this.style = 'text-white bg-success'
    } else {
      this.style = 'text-dark bg-warning'
    }
  }
  changeState() {
    this.todo.completed = !this.todo.completed
    if (this.todo.completed) {
      this.style = 'text-white bg-success'
      this.toDoService.updateToDo(this.todo)
    } else {
      this.style = 'text-dark bg-warning'
      this.toDoService.updateToDo(this.todo)
    }
  }
}
