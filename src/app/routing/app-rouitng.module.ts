import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { StudentsComponent } from '../students/students.component';
import { HomepageComponent } from '../homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: 'naslovna', pathMatch: 'full'},
  { path: 'studenti', component: StudentsComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouitngModule { }
