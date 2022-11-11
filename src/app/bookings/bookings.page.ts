import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Booking } from '../places/places.model';
import { PlacesService } from '../places/places.service';
import {} from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(
    private placesService: PlacesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //this.loadedBookings = this.bookingsService.allBookings;
  }

  ionViewWillEnter() {
    this.getAllBookings();
  }

  getAllBookings() {
    this.placesService.getAllBookings().subscribe((bookingList: Booking[]) => {
      this.loadedBookings = bookingList.filter(
        (booking) => booking.userId === this.authService.userId
      );
      console.log(bookingList, this.loadedBookings, this.authService.userId);
    });
  }

  onCancelBooking(bookingId: string) {
    this.placesService
      .cancelBooking(bookingId)
      .subscribe(() => this.getAllBookings());
  }
}
