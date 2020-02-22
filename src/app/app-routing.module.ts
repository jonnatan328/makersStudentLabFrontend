import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';


const routes: Routes = [
  { path: 'listar-estudiantes', component: StudentsListComponent },
  { path: '*', component: StudentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
