import { Component, OnInit } from '@angular/core';
import { Order } from './order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = new Array<Order>();
  message: string;
  constructor() { }

  ngOnInit() {
    this.orders = [{ id: 1, customerName: 'Test1', orderDate: new Date('aug-16-2007'), qty: 3 },
    { id: 2, customerName: 'Test1', orderDate: new Date('aug-17-2009'), qty: 4 },
    { id: 3, customerName: 'Test1', orderDate: new Date('aug-18-2005'), qty: 5 }]
  }

  receiveFromChild(data: string) {
    this.message = data;
  }
}
