import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() restaurant!:Restaurant;
}
