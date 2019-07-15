import { Component, OnInit } from '@angular/core';
import { IPlace } from './mock';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public places: IPlace[];
  public states: string[];
  public pickedState: string;
  public pickedPlace: IPlace;

  constructor(private weatherService: WeatherDataService) { };

  public setState(stateName: string) {
    this.pickedState = stateName;
  }
  public setPlace(place: IPlace) {
    this.pickedPlace = place;
  }

  public ngOnInit() {
    this.weatherService.getPlaces().subscribe((places: IPlace[]) => {
      this.places = places;
      this.pickedPlace = this.places[0];

      this.states = this.places
        .map((place: IPlace) => place.state)
        .reduce((acc: string[], cur: string) => {
          if (!~acc.indexOf(cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

      this.pickedState = this.states[0];
    });
  }
}
