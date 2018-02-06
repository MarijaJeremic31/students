import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class MockServiceService {

  constructor(private messageService: MessageService) { }

  getStudentsFromMockFile(): Observable< Student[]> {
    this.messageService.addNewMessage('Dohvaceni su podaci o studentima');
    this.messageService.addNewMessage('poruka 2');
    this.messageService.addNewMessage('poruka 3');

    return of (STUDENTS);
  }

}
