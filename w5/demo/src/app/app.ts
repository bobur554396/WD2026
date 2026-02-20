import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Student} from './models';
import {StudentCard} from './student-card/student-card';
import {TaskList} from './task-list/task-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, StudentCard, TaskList],
  templateUrl: './app.html',
  // template: '<h1>Hello</h1>',
  styleUrl: './app.css',
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

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }


}
