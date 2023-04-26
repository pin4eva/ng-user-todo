import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todo-item',
  styleUrls: ['./todo.component.scss'],
  template: `
    <li class="todo-list-item list-group-item mb-2">
      {{ todo?.title }} <button class="btn text-danger app-icon" (click)="handleDelete(todo!.id)">close</button>
    </li>
  `,
})
export class TodoItemComponent {
  @Input()
  todo: Todo | undefined;
  @Output()
  onDelete = new EventEmitter<number>();

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }
}
