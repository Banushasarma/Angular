import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../master/Model/employee';
import { Designation } from '../master/Model/designation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = 'https://localhost:44369/';

  constructor(
    private http: HttpClient
  ) { }

  getEmployees() {
    let URL = `${this.baseURL}api/employee/getemployees`;
    return this.http.get<Employee[]>(URL);
  }

  getEmployee(Id: number) {
    let URL = `${this.baseURL}api/employee/GetEmployees/${Id}`;
    return this.http.get<Employee>(URL);
  }

  getDesignations() {
    let URL = `${this.baseURL}api/designation/get`;
    return this.http.get<Designation[]>(URL);
  }

  getLocations() {
    let URL = `${this.baseURL}api/location/get`;
    return this.http.get<Designation[]>(URL);
  }

  Save(employee: Employee) {
    let URL = `${this.baseURL}api/employee/save`;
    return this.http.post(URL, employee, {
      observe: 'response',
      responseType: 'json'
    })
  }

  Delete(Id: number) {
    let URL = `${this.baseURL}api/employee/delete`;
    return this.http.delete(URL, {
      params: new HttpParams().set('Id', `${Id}`)
    });
  }



}
