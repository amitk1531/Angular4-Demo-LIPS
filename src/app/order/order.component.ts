import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Order } from '../service/order/order';
import { OrderService } from '../service/order/order.service';
import { OrderListComponent } from './order-list/order-list.component';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders = new Array<Order>();
  order: Order = new Order();
  message: string;
  @ViewChild(OrderListComponent)
  orderListComponet: OrderListComponent;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    // this.orderListComponet.orderList = this.orders;
  }

  addOrder() {
    console.log(this.order);
  }

  // ngDoCheck(): void {
  //   console.log(this.message);
  // }

  receiveFromChild(data: string) {
    this.message = data;
  }

  // addOrder() {
  //   let order = { id: 4, customerName: 'Test4', orderDate: new Date('aug-17-2017'), qty: 5 };
  //   this.orders = [order];
  // }
}
