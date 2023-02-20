import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';

  list:Todo[];
  todoValue:string;

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== ""){
      alert("called addItem");
      console.log("called addItem");
      const newEntry: Todo = {
        todoValue: this.todoValue,
        isDone: false,
        id: Date.now()
      };
      this.list.push(newEntry);
      this.todoValue = "";
    }
  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }


}


