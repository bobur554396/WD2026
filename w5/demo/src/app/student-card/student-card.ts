import {Component, input, output} from '@angular/core';
import {Student} from '../models';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  student = input.required<Student>();
  delete = output<number>(); // send student id to the parent

  onDelete() {
    this.delete.emit(this.student().id);
  }
}
