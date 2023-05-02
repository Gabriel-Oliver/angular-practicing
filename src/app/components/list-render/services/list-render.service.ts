import { Injectable } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListRenderService {
  constructor() {}
  remove(animals: Animal[], animal: Animal): Animal[] {
    return animals.filter(
      (el) =>
        !(
          el.age === animal.age &&
          el.name === animal.name &&
          el.type === animal.type
        )
    );
  }
}
