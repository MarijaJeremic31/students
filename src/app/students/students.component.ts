import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  selectedStudent: Student;

   // student: Student = {
   //  id: 1,
   //  name: 'Petar Petrovic',
   //  gender: 'male',
   //  description: 'Opis'
   // };
  // student = 'Petar Petrovic';

  onSelectedStudent(student){
    this.selectedStudent = student;


  }

  constructor() { }

  ngOnInit() {
  }

}
