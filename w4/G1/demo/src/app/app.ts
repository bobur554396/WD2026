import {Component, numberAttribute, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';


interface Student {
  id: string,
  name: string,
  age: number,
  gpa: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'KBTU';
  numbers: number[] = [3, 1, 4, 6];
  students: Student[] = [
    {
      id: "26B1",
      name: "Student 1",
      age: 20,
      gpa: 3.9
    },
    {
      id: "26B2",
      name: "Student 2",
      age: 21,
      gpa: 3.5
    },
    {
      id: "26B3",
      name: "Student 3",
      age: 18,
      gpa: 3.7
    }
  ];
  count = 0;
  isLoggedIn: boolean = false;
  message = "Welcome to SITE";
  tasks: string[] = [];
  newTask: string = '';


  incClicked() {
    this.count++;
  }

  decClicked() {
    this.count--;
  }

  login(){
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  addTask() {
    if(this.newTask !== '') {
      this.tasks.push(this.newTask);
    } else {
      alert("Enter task description");
    }
    this.newTask = '';
  }



}
