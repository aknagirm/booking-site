import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage {
  placesList: Place[];

  constructor(
    private placesService: PlacesService,
    private authService: AuthService
  ) {}

  ionViewWillEnter() {
    this.placesService
      .loadAllPlaces()
      .pipe(take(1))
      .subscribe((placesData: Place[]) => {
        this.placesList = placesData.filter(
          (place) => place.userId === this.authService.userId
        );
      });
  }
}
