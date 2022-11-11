export interface Place {
  placeId?: string;
  title: string;
  description: string;
  imageUrl: any;
  price: number;
  availableFrom: string;
  availableTo: string;
  userId: string;
}

export interface Booking extends Place {
  bookingId: string;
  name: string;
  guestNumber: string;
  from: string;
  to: string;
}

export const placesList: Place[] = [
  /* {
    id: 'p1',
    title: 'Green View Homestay',
    description:
      'A beautiful treat for your eyes, with all the modern facilities.',
    imageUrl: 'p1.jpg',
    price: 1400,
  },
  {
    id: 'p2',
    title: 'The Foggy Garden',
    description: 'Feel the cloud with your soul, away from the busy crowd.',
    imageUrl: 'p2.jpg',
    price: 2400,
  },
  {
    id: 'p2',
    title: 'The Aqua Residency',
    description: 'Modern housing at the heart of the city',
    imageUrl: 'p3.jpg',
    price: 1800,
  }, */
];
