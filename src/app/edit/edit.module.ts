import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [EditEmployeeComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule
  ],
  providers: [
    DatePipe
  ]
})
export class EditModule { }
