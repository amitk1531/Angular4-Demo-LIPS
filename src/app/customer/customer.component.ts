import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name: string = 'Test';
  isVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
   this.isVisible = !this.isVisible; 
  }

}
