import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todo-item',
  styleUrls: ['./todo.component.scss'],
  template: `
    <li class="todo-list-item list-group-item mb-2" [ngClass]="todo?.completed ? 'text-decoration-line-through' : ''">
      <div class="d-flex gap-1">
        <input type="checkbox" (change)="handleCompleted()" [checked]="todo?.completed" />
        <span class="btn btn p-0 border-0" *ngIf="!editMode" (dblclick)="editMode = true"> {{ todo?.title }}</span>
        <input type="text" [(ngModel)]="todo!.title" *ngIf="editMode" />
      </div>
      <div>
        <button *ngIf="!editMode" class="btn text-danger app-icon" (click)="handleDelete(todo!.id)">
          <i class="fas fa-trash"></i>
        </button>
        <button *ngIf="editMode" class="btn text-danger app-icon" (click)="editMode = false">Save</button>
      </div>
    </li>
  `,
})
export class TodoItemComponent {
  @Input()
  todo: Todo | undefined;
  @Output()
  onDelete = new EventEmitter<number>();
  editMode = false;

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }

  handleCompleted() {
    if (this.todo) {
      this.todo.completed = !this.todo?.completed;
    }

    console.log(this.todo);
  }
}
