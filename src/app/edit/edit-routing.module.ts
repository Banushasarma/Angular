import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  {
    path: 'employee',
    component: EditEmployeeComponent
  },
  {
    path: 'employee/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
