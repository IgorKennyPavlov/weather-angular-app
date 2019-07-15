import { Injectable } from '@angular/core';
import { places$, IPlace } from './mock';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherDataService {

  public places$: Observable<IPlace[]> = places$;

  constructor() { }

  public getPlaces(): Observable<IPlace[]> {
    return this.places$;
  }
}
