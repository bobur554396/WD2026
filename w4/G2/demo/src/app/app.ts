import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';


interface Student {
  id: number;
  name: string;
  email: string;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "KBTU";
  numbers: number[] = [2, 4, 1, 5, 8];
  students: Student[] = [
    {id: 1, name: "John", email: "john@gmail.com"},
    {id: 2, name: "KBTU", email: "kbtu@gmail.com"},
    {id: 3, name: "SITE", email: "site@gmail.com"},
    {id: 4, name: "STEP", email: "step@gmail.com"},
  ];
  isLoggedIn: boolean = false;
  tasks: string[] = [];
  newTask: string = '';

  login() {
    this.isLoggedIn = true;
  }

  logout() {
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

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }


}
