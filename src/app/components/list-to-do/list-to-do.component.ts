import { Component, OnInit } from '@angular/core';
import { ToDos } from 'src/app/models/ToDos';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  toDos: ToDos[] = []
  toDosFilter: ToDos[] = []
  term = ""
  field = 'user'
  filtering = false
  constructor(private toDosService: ToDoService) { }

  ngOnInit(): void {
    this.toDosService.getToDos().subscribe((res) => {
      this.toDos = res;
      this.term == "" ? this.toDosFilter = this.toDos : null
    })
  }

  filter() {
    this.filtering = true
    var todoFound: ToDos[] = []
    switch (this.field) {
      case 'user':
        this.toDos.forEach((t) => {
          if (t.userId === parseInt(this.term)) {
            todoFound.push(t)
          }
        })
        break;
      case 'complete':
        this.toDos.forEach((t) => {
          if (t.completed === true) {
            todoFound.push(t)
          }
        })
        break;
      case 'incomplete':
        this.toDos.forEach((t) => {
          if (t.completed === false) {
            todoFound.push(t)
          }
        })
        break;
    }
    this.toDosFilter = todoFound
  }
}
