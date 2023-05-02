import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    name: 'Gabriel',
    age: 24,
    email: 'gabrielmed2010@hotmail.com',
    role: 'Admin',
  };
  title = 'estudo-angular';
}
