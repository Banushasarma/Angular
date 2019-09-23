import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


@NgModule({
  declarations: [EditEmployeeComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
