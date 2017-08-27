import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empList: any[] = [{ id: 1, name: 'Test1', salary: 1000, address: 'Pune' },
  { id: 2, name: 'Test2', salary: 2000, address: 'Pune' },
  { id: 3, name: 'Test3', salary: 3000, address: 'Pune' }];
  constructor() { }

  ngOnInit() {
  }

}
