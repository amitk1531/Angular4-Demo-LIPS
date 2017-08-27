import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  // <h1>Hello World!</h1>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empData = [{ id: 1, name: 'Test1', salary: 1000, address: 'Pune' },
  { id: 2, name: 'Test2', salary: 2000, address: 'Pune' },
  { id: 3, name: 'Test3', salary: 3000, address: 'Pune' }];
}
