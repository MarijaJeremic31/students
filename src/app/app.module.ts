import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MockServiceService } from './mock-service.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRouitngModule } from './routing/app-rouitng.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    HomepageComponent,
    NastavniciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouitngModule
  ],
  providers: [ MockServiceService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
