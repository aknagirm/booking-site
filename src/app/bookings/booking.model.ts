export interface Booking {
  id: string;
  placeId: string;
  userId: string;
  placeTitle: string;
  guestNumber: number;
}

export const bookingList: Booking[] = [
  {
    id: 'xyz',
    placeId: 'p1',
    placeTitle: 'Green View Homestay',
    userId: 'abc',
    guestNumber: 2,
  },
];
