import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { WeatherComponent } from './weather/weather.component';
import { TwitterComponent } from './twitter/twitter.component';
import { FilterPipe } from './filter.pipe';
import { WeatherDataService } from './weather-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    WeatherComponent,
    TwitterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
