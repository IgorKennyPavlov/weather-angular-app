import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPlace } from '../mock';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {

  @Input()
  public places: IPlace[];
  @Input()
  public states: string[];
  @Input()
  public pickedState: string;
  @Input()
  public pickedPlace: IPlace;

  @Output()
  public statePicked: EventEmitter<string> = new EventEmitter();

  @Output()
  public placePicked: EventEmitter<IPlace> = new EventEmitter();

  public pickState(state: string) {
    this.statePicked.emit(state);
    this.placePicked.emit(this.places.find((place: IPlace) => place.state === state))
  }

  public pickPlace(place: IPlace) {
    this.placePicked.emit(place);
  }

  constructor() { }
}
