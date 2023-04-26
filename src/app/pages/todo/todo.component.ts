import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = [
      { title: 'Item 1', id: 1, completed: false },
      { title: 'Item 2', id: 2, completed: false },
    ];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
