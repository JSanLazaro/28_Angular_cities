import { Component } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant.model';
import { restaurants } from 'src/app/mockup-restaurants'

@Component({
  selector: 'app-popular-restaurant',
  templateUrl: './popular-restaurant.component.html',
  styleUrls: ['./popular-restaurant.component.scss']
})
export class PopularRestaurantComponent {
  restaurants:Restaurant[] = restaurants;
}
