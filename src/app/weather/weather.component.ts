import { Component, Input } from '@angular/core';
import { Weather } from '../mock';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  @Input()
  public weather: Weather;

  constructor() { }
}
