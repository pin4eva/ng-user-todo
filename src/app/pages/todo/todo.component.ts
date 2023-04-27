import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todo: Todo = { id: 0, completed: false, title: '' };
  todos: Todo[] = [{ id: 0, title: 'Demo', completed: false }];

  ngOnInit(): void {}

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  onSubmit(event: Event) {
    const todo: Todo = {
      id: this.todos.length + 1,
      title: this.todo.title,
      completed: false,
    };

    this.todos.unshift(todo);
    this.todo.title = '';
  }

  onDelete(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
