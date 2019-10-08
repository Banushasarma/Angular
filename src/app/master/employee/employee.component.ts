import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from '../Model/employee';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeArr: Employee[] = [];
  employeeFilteredArr: Employee[] = [];
  SearchText: string;

  constructor(
    private empServ: EmployeeService,
    private tostr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.FillEmployees();
  }

  FillEmployees() {
    this.empServ.getEmployees().subscribe(
      data => {
        this.employeeArr = data;
        console.log(this.employeeArr);
      },
      error => {
        console.error(error);
      }
    );
  }

  EditClick(id: number) {
    this.router.navigate(['/edit/employee/' + id]);
  }

  DeleteClick(id: number) {
    let result = confirm('Are you sure want to delete this record..?');
    if (result) {
      this.empServ.Delete(id).subscribe(
        data => {
          this.tostr.success('Successfully deleted.');
        },
        err => {
          console.error(err.error);
          this.tostr.error(err.error);
        }
      )
    }
    this.FillEmployees();
    this.router.navigate(['/employee']);
  }

  New() {
    this.router.navigate(['/edit/employee']);
  }

  Filter() {
    this.employeeFilteredArr = this.employeeArr.filter(
      search => (search.Name.toLowerCase().indexOf(this.SearchText.toLowerCase()) !== -1)
    )

    this.employeeArr = this.employeeFilteredArr;
  }

  ClearFilter(){
    this.FillEmployees();
  }

}