import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';


interface Student {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "KBTU";
  numbers: number[] = [20, 10, 40, 30];
  students: Student[] = [
    {id: 1, name: 'Student 1', age: 20},
    {id: 2, name: 'Student 2', age: 18},
    {id: 3, name: 'Student 3', age: 23},
  ];
  isLoggedIn: boolean = false;
  tasks: string[] = [];
  newTask: string = '';

  login() {
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }

  addTask(){
    if(this.newTask !== ''){
      this.tasks.push(this.newTask);
    } else {
      alert("Please, enter task description");
    }
    this.newTask = '';
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
}
