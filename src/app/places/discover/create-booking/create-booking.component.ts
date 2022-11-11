import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Booking, Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  constructor(
    private modalCtrl: ModalController,
    private placesService: PlacesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(createBookingForm: NgForm) {
    const formDetails = createBookingForm.value as Booking;
    const bookingDetails = { ...formDetails, ...this.selectedPlace };
    bookingDetails.userId = this.authService.userId;
    this.placesService.createBooking(bookingDetails).subscribe(() => {
      createBookingForm.reset();
      this.router.navigateByUrl('/bookings');
      this.modalCtrl.dismiss(
        { message: 'dummy message', formValue: createBookingForm.value },
        'confirm'
      );
    });
  }
}
