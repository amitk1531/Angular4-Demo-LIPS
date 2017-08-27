import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() empList: any[];
  @Input() title: string;
  hidden: boolean = false;
  @Output() isVisibleEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  hideDiv() {
    this.hidden = !this.hidden;
    this.isVisibleEvent.emit(this.hidden);
  }

}
