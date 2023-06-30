import { Component } from '@angular/core';
import { Rankingcity } from 'src/app/model/rankingcity.model';
import { rankingCities } from 'src/app/mockup-ranking';

@Component({
  selector: 'app-section-ranking',
  templateUrl: './section-ranking.component.html',
  styleUrls: ['./section-ranking.component.scss']
})
export class SectionRankingComponent {
  cities:Rankingcity[] = rankingCities;
}
