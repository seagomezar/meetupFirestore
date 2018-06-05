import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodosProvider } from '../../providers/todos/todos';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodosProvider]
})
export class HomePage {
  public todos: Observable<any>;
  public todo: String = '';

  constructor(public navCtrl: NavController, public todosProvider: TodosProvider) {
    this.todos = this.todosProvider.list();
  }

  addTodo() {
    if (!this.todo) {
      return;
    }

    this.todosProvider.add(this.todo);
    this.todo = '';
  }

  completeTodo(todo) {
    this.todosProvider.complete(todo);
  }
  
  deleteTodo(todo) {
    this.todosProvider.delete(todo);
  }

}