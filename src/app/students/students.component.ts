import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';
import { MockServiceService } from '../mock-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
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

  constructor( private mockService: MockServiceService) { }

  ngOnInit() {
    this.getStudentsFromService();
  }

  getStudentsFromService(): void {
    //this.students = this.mockService.getStudentsFromMockFile();
    this.mockService.getStudentsFromMockFile().subscribe(students => this.students = students)
  }

}
