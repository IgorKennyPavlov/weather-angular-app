import { Component, OnInit } from '@angular/core';
import { places$, IPlace } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private places$: Observable<IPlace[]> = places$;
  public places: IPlace[];
  public states: string[];
  public pickedState: string;
  public pickedPlace: IPlace;

  public setState(stateName: string) {
    this.pickedState = stateName;
  }
  public setPlace(place: IPlace) {
    this.pickedPlace = place;
  }

  public ngOnInit() {
    this.places$.subscribe((places: IPlace[]) => {
      this.places = places;
      this.pickedPlace = this.places[0];

      this.states = this.places
        .map((place: IPlace) => place.state)
        .reduce((acc: string[], cur: string, i, arr) => {
          if (!~acc.indexOf(cur)) {
            acc.push(cur);
          }
          return acc;
        }, []);

      this.pickedState = this.states[0];
    });
  }
}
