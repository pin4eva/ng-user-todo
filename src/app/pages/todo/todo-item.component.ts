import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo | null = null;
  onClick(title?: string) {
    console.log(title);
  }
}
