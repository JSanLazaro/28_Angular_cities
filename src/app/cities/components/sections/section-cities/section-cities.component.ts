import { Component } from '@angular/core';
import { cities } from 'src/app/mockup-cities'
import { City } from 'src/app/model/city.model';

@Component({
  selector: 'app-section-cities',
  templateUrl: './section-cities.component.html',
  styleUrls: ['./section-cities.component.scss']
})
export class SectionCitiesComponent {
  cities:City[] = cities;
}
