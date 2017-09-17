import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { Order } from '../order'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orderList: Order[];
  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent()
  {
    this.message.emit("This is message from child");
  }
}
