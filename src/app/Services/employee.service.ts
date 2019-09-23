import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<any>(URL, {
      responseType: 'json'
    });
  }


}
