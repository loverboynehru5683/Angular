import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployeesInfo(){
    return  [
      {empId:101, empName:'chiru'},
      {empId:102, empName:'uday'},
    ]
  }
}
