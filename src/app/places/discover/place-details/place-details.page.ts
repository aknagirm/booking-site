import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../create-booking/create-booking.component';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      if (!param?.get('place-id')) {
        this.navCtrl.navigateBack('places/offers');
        return;
      }
      this.place = this.placesService.getPlace(param.get('place-id'));
    });
  }

  onBook() {
    // this.navCtrl.navigateBack('places/discover');
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place },
      })
      .then((modal) => {
        modal.present();
        modal.onDidDismiss().then((event) => {
          console.log(event.data, event.role);
        });
      });
  }
}
