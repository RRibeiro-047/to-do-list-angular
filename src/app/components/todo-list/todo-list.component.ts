import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.models';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(50px)' })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms', animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ])
  ],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todos$.subscribe(todos => this.todos = todos);
    this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  clearCompleted() {
    if (this.completedCount > 0) {
      this.todoService.clearCompleted();
    }
  }

  clearAll() {
    if (this.totalCount > 0 && confirm('Tem certeza que deseja limpar todas as tarefas?')) {
      this.todoService.clearAll();
    }
  }

  get completedCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  get totalCount(): number {
    return this.todos.length;
  }

  get pendingCount(): number {
    return this.totalCount - this.completedCount;
  }

  get progressPercentage(): number {
    return this.totalCount > 0 ? (this.completedCount / this.totalCount) * 100 : 0;
  }

  trackByTodo(index: number, todo: Todo): number {
    return todo.id;
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}
