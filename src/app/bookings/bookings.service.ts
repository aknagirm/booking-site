import { Injectable } from '@angular/core';
import { Booking, bookingList } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  bookings: Booking[] = bookingList;

  constructor() {}

  get allBookings() {
    return [...this.bookings];
  }
}
