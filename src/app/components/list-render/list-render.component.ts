import { Component } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animalDetails = '';
  animals: Animal[] = [
    { name: 'Valor', type: 'Parrot', age: 2 },
    { name: 'Atena', type: 'Parrot', age: 2 },
    { name: 'Gaia', type: 'Cat', age: 1 },
  ];
  showAge(animal: Animal): void {
    this.animalDetails = `The pet ${animal.name}(${animal.type}) have ${animal.age} years old!`;
  }
}
