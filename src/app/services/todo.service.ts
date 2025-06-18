import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Todo } from '../models/todo.models';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly STORAGE_KEY = 'advanced-todo-list';
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  
  public todos$ = this.todosSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.todos = JSON.parse(stored).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        this.todosSubject.next(this.todos);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas do armazenamento:', error);
      this.todos = [];
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    } catch (error) {
      console.error('Erro ao salvar tarefas no armazenamento:', error);
    }
  }

  private updateTodos(): void {
    this.todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    this.todosSubject.next([...this.todos]);
    this.saveToStorage();
  }

  getTodos(): void {
    this.updateTodos();
  }

  addTodo(title: string): void {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now() + Math.random(),
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.todos.push(newTodo);
    this.updateTodos();
  }

  toggleTodo(id: number): void {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    
    if (todoIndex !== -1) {
      this.todos[todoIndex] = {
        ...this.todos[todoIndex],
        completed: !this.todos[todoIndex].completed
      };
      this.updateTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateTodos();
  }

  updateTodo(id: number, updates: Partial<Todo>): void {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    
    if (todoIndex !== -1) {
      this.todos[todoIndex] = {
        ...this.todos[todoIndex],
        ...updates
      };
      this.updateTodos();
    }
  }

  getCompletedTodos(): Observable<Todo[]> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => todo.completed))
    );
  }

  getPendingTodos(): Observable<Todo[]> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => !todo.completed))
    );
  }

  getTotalCount(): Observable<number> {
    return this.todos$.pipe(
      map(todos => todos.length)
    );
  }

  getCompletedCount(): Observable<number> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => todo.completed).length)
    );
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.updateTodos();
  }

  toggleAll(): void {
    const allCompleted = this.todos.every(todo => todo.completed);
    this.todos = this.todos.map(todo => ({
      ...todo,
      completed: !allCompleted
    }));
    this.updateTodos();
  }

  clearAll(): void {
    this.todos = [];
    this.updateTodos();
  }
}
