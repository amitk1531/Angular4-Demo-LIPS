import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order/order-list/order-list.component';

import { OrderService } from './service/order/order.service';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //OrderService,
    { provide: OrderService, useClass: OrderService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
