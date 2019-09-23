import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MasterModule { }
