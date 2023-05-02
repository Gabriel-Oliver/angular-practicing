import { Component } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  templateUrl: './frist-component.component.html',
  styleUrls: ['./frist-component.component.css'],
})
export class FristComponent {
  name = 'Gabriel';
  age = 23;
  job = 'Programmer';
  constructor() {}
  ngOnInit(): void {}
}
