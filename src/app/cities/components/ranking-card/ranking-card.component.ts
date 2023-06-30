import { Component, Input } from '@angular/core';
import { Rankingcity } from 'src/app/model/rankingcity.model';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.scss']
})
export class RankingCardComponent {
  @Input() city!:Rankingcity
}
