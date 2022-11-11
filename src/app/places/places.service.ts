import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Booking, Place } from './places.model';

interface PlacesData {
  [key: string]: Place;
}

interface BookingData {
  [key: string]: Booking;
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  placesList: Place[];
  constructor(private authService: AuthService, private http: HttpClient) {}

  loadAllPlaces(): Observable<Place[]> {
    const placesList: Place[] = [];
    return this.http
      .get<PlacesData>(
        'https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/offer-list.json'
      )
      .pipe(
        map((places: PlacesData) => {
          for (const key in places) {
            if (places.hasOwnProperty(key)) {
              const placeObj = places[key];
              placeObj.placeId = key;
              placesList.push(placeObj);
            }
          }
          return placesList;
        }),
        tap((places: Place[]) => {
          this.placesList = places;
          return places;
        })
      );
  }

  getPlace(placeId: string): Place {
    return this.placesList.find((place) => place.placeId === placeId);
  }

  createOffer(offerData: Place): Observable<{ name: 'string' }> {
    const user = this.authService.userId;
    offerData.userId = user;
    offerData.imageUrl = 'p1.jpg';
    return this.http.post<{ name: 'string' }>(
      'https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/offer-list.json',
      offerData
    );
  }

  editOffer(selectedPlace: Place): Observable<Place> {
    return this.http.put<Place>(
      `https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/offer-list/${selectedPlace.placeId}.json`,
      selectedPlace
    );
  }

  createBooking(bookingDetails: Booking): Observable<{ name: 'string' }> {
    return this.http.post<{ name: 'string' }>(
      'https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/booking.json',
      bookingDetails
    );
  }

  getAllBookings(): Observable<Booking[]> {
    const bookingDataList: Booking[] = [];
    return this.http
      .get<BookingData>(
        'https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/booking.json'
      )
      .pipe(
        map((bookingData: BookingData) => {
          for (const key in bookingData) {
            if (bookingData.hasOwnProperty(key)) {
              const bookingObj: Booking = {
                ...bookingData[key],
                bookingId: key,
              };
              bookingDataList.push(bookingObj);
            }
          }
          return bookingDataList;
        })
      );
  }

  cancelBooking(bookingId: string) {
    return this.http.delete(
      `https://ionic-ng-booking-site-default-rtdb.asia-southeast1.firebasedatabase.app/booking/${bookingId}.json`
    );
  }
}
