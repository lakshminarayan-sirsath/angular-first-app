import { Component, signal } from '@angular/core';
import { AddItems } from './add-items/add-items'; 
import { TodoList } from './todo-list/todo-list';
@Component({
  selector: 'app-root',
  imports: [AddItems, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
  
  todos: string[] = [];

  addTodo(newTodo: string) {
    if(newTodo) {
      this.todos.push(newTodo);
      console.log(this.todos);
    }
  }

  handleDeletedTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
