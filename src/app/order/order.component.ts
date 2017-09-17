import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from './order';
import { OrderListComponent } from './order-list/order-list.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = new Array<Order>();
  message: string;
  @ViewChild(OrderListComponent)
  orderListComponet: OrderListComponent;

  constructor() { }

  ngOnInit() {
    this.orders = [{ id: 1, customerName: 'Test1', orderDate: new Date('aug-16-2007'), qty: 3 },
    { id: 2, customerName: 'Test1', orderDate: new Date('aug-17-2009'), qty: 4 },
    { id: 3, customerName: 'Test1', orderDate: new Date('aug-18-2005'), qty: 5 }]

    // this.orderListComponet.orderList = this.orders;
  }

  receiveFromChild(data: string) {
    this.message = data;
  }

  addOrder() {
    let order = { id: 4, customerName: 'Test4', orderDate: new Date('aug-17-2017'), qty: 5 };
    this.orders = [order];
  }
}
