import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todos=[
    
    
  ];
  todo="";

  add(){
    this.todos.push(this.todo);

  }
  deleteTodo(event){
    this.todos=this.todos.filter(todo=>{
      return todo!=event;
    })

  }
 // change(event:Event){
  //  this.todo=(event.target as HTMLInputElement).value;
 // }
}
