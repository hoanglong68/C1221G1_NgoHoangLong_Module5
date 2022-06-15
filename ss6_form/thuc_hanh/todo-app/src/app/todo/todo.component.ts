import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  content = new FormControl();

  ngOnInit(): void {
    this.todoService.getAll().subscribe(todoList => {
      this.todoList = todoList;
    })
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo).subscribe(()=>{
      this.ngOnInit();
    })
  }

  change() {
    const value = this.content.value;
    if (value) {
      let todo: Todo = {
        content: value,
        complete: false
      };

      this.todoService.saveTodo(todo).subscribe(()=>{
        this.content.reset();
        this.ngOnInit();
      });
    }
  }
}
