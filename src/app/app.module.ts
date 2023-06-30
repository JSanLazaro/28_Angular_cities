import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './cities/components/card/card.component';

import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'; 


import { PopularRestaurantComponent } from './cities/components/sections/section-popular-restaurant/popular-restaurant.component';
import { SectionMainComponent } from './cities/components/sections/section-main/section-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SectionCitiesComponent } from './cities/components/sections/section-cities/section-cities.component';
import { SectionRankingComponent } from './cities/components/sections/section-ranking/section-ranking.component';
import { RankingCardComponent } from './cities/components/ranking-card/ranking-card.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    PopularRestaurantComponent,
    SectionMainComponent,
    SectionCitiesComponent,
    SectionRankingComponent,
    RankingCardComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
