import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule
  ]
})
export class MasterModule { }
