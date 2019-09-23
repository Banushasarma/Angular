import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  
  constructor(
    private empServ: EmployeeService
  ) { }

  ngOnInit() {
    this.FillEmployees();
  }

  FillEmployees() {
    this.empServ.getEmployees().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    )

  }

}
