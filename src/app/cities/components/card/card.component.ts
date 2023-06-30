import { Component, Input } from '@angular/core';
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() city!:City;
}
