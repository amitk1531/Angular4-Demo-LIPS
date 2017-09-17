import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable()
export class OrderService {
  order = new Array<Order>();
  constructor() { }

  getOrders(): Order[] {
    return this.order = [{ id: 1, customerName: 'Test1', orderDate: new Date('aug-16-2007'), qty: 3 },
    { id: 2, customerName: 'Test1', orderDate: new Date('aug-17-2009'), qty: 4 },
    { id: 3, customerName: 'Test1', orderDate: new Date('aug-18-2005'), qty: 5 }]

  }
}
