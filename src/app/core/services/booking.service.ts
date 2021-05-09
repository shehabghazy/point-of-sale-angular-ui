import {Injectable} from '@angular/core';

export const bookings = [
  {
    schedule: {
      user: 'useruser1',
      date: '04/05/2021',
      time: '09:00'
    },
    clientInfo: {
      name: 'Fiorelo',
      phone: '355696563773',
      description: 'Service'
    }
  },
  {
    schedule: {
      user: 'useruser2',
      date: '04/06/2021',
      time: '11:00'
    },
    clientInfo: {
      name: 'Frens',
      phone: '355696563774',
      description: 'Service'
    }
  },

];

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() {
  }

  getBookings(user: string, date: Date): any {
    return bookings.filter((book: any) => {
      if (user === book.schedule.user && new Date(book.schedule.date) === date) {
        return book;
      }
    });
  }
}
