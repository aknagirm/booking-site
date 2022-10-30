import { Injectable } from '@angular/core';
import { Place, placesList } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  placesList: Place[] = placesList;

  constructor() {}

  get places(): Place[] {
    return [...this.placesList];
  }

  getPlace(placeId: string): Place {
    return this.placesList.find((place) => place.id === placeId);
  }
}
