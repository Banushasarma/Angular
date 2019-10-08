import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/master/Model/location';
import { Employee } from 'src/app/master/Model/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Designation } from 'src/app/master/Model/designation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  emp: Employee = new Employee();
  locationArr: Location[] = [];
  designationArr: Designation[] = [];
  dateFormat: any;
  empId = 0;

  constructor(
    private empServ: EmployeeService,
    private tostr: ToastrService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.FillLocations();
    this.FillDesignations();

    this.empId = Number(this.activeRoute.snapshot.paramMap.get('id'));

    if (this.empId > 0) {
      this.FillEmployee(this.empId);
    }

  }


  FillEmployee(empId: number) {
    this.empServ.getEmployee(empId).subscribe(
      data => {
        this.emp = data;
        this.dateFormat = this.datePipe.transform(this.emp.DOB, 'yyyy-MM-dd');
      },
      err => {
        this.tostr.error(err.error);
        console.error(err.error);
      }
    )
  }

  FillLocations() {
    this.empServ.getLocations().subscribe(
      data => {
        this.locationArr = data;
      },
      err => {
        this.tostr.error(err.error);
        console.error(err.error);
      }
    )
  }

  FillDesignations() {
    this.empServ.getDesignations().subscribe(
      data => {
        this.designationArr = data;
      },
      err => {
        this.tostr.error(err.error);
        console.error(err.error);
      }
    )
  }

  Save() {
    this.emp.DOB = this.dateFormat;
    this.empServ.Save(this.emp).subscribe(
      data => {
        this.tostr.success('Saved successfull');
      },
      err => {
        this.tostr.error(err.error);
        console.error(err.error);
      }
    )
  }

  Back(){
    this.router.navigate(['/master/employee']);
  }

}
