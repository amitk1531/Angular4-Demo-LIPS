import {
  Component, OnInit, Input
  , Output, EventEmitter, OnChanges, SimpleChanges,
  ChangeDetectionStrategy, DoCheck , OnDestroy
} from '@angular/core';
import { Order } from '../order'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit,
 OnChanges, DoCheck, OnDestroy {
  @Input() orderList: Order[];
  @Input() test: string;
  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log(this.orderList);
  }

  sendMessageToParent() {
    this.message.emit("This is message from child");
  }

   ngOnDestroy(): void{
      alert('This is destry event');
   }
  
}
