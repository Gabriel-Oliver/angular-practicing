import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Interfaces/Animal';
import { ListRenderService } from '../list-render/services/list-render.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  animal?: Animal;
  constructor(
    private listService: ListRenderService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }
  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
