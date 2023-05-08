import { Component } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';
import { ListRenderService } from './services/list-render.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animalDetails = '';
  animals: Animal[] = [];

  constructor(private listRenderService: ListRenderService) {
    this.getAnimals();
  }
  showAge(animal: Animal): void {
    this.animalDetails = `The pet ${animal.name}(${animal.type}) have ${animal.age} years old!`;
  }
  removeAnimal(animal: Animal): void {
    this.animals = this.listRenderService.remove(this.animals, animal);
  }
  getAnimals(): void {
    this.listRenderService
      .getAll()
      .subscribe((animals) => (this.animals = animals));
  }
}
