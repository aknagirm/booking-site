import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {
  placesList: Place[] = [];
  placesListTemp: Place[] = [];
  isLoading = false;
  defaultView = 'all';
  currentView = 'all';

  constructor(
    private placesService: PlacesService,
    private authService: AuthService
  ) {}

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService
      .loadAllPlaces()
      .pipe(take(1))
      .subscribe((placesData: Place[]) => {
        this.placesList = placesData;
        this.placesListTemp = [...placesData];
        this.isLoading = false;
        console.log(this.placesList);
      });
  }

  onSegmentChange(event: Event) {
    const value = (event as CustomEvent).detail.value;
    this.placesList = [...this.placesListTemp];
    console.log(value);
    this.currentView = value;
    if (value === 'bookable') {
      this.placesList = this.placesList.filter(
        (place) => place.userId !== this.authService.userId
      );
    }
  }
}
