import { Injectable } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListRenderService {
  private apiUrl = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
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
