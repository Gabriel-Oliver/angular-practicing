import { Component, Input, OnInit } from '@angular/core';

interface UserDataProps {
  name: string;
  age: number | null;
  email: string;
  role: string;
}

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() userData: UserDataProps = {
    name: '',
    age: null,
    email: '',
    role: '',
  };
  constructor() {}
  ngOnInit(): void {}
}
