import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const mockDashboardData = {
  salesToday: 123300,
  invoices: 23,
  items: [
    {
      name: 'Birre',
      value: 50
    },
    {
      name: 'Patatina',
      value: 100
    },
    {
      name: 'Makarona',
      value: 10
    },
    {
      name: 'Lays',
      value: 76
    },
    {
      name: 'Cokollate',
      value: 54
    },
  ],
  categories: [
    {
      name: 'Te ftohta',
      value: 40
    },
    {
      name: 'Te ngrohta',
      value: 30
    },
    {
      name: 'Ushqime',
      value: 320
    },

  ],
  itemsBelowMinimumStock: [
    {
      id: 1,
      name: 'Birre Peja',
      minimumStock: 10,
      stock: 8
    },
    {
      id: 2,
      name: 'Birre Korca',
      minimumStock: 10,
      stock: 1
    },
    {
      id: 3,
      name: 'Makarona',
      minimumStock: 15,
      stock: 10
    },
    {
      id: 4,
      name: 'Oriz',
      minimumStock: 20,
      stock: 7
    },
    {
      id: 5,
      name: 'Cokollate',
      minimumStock: 3,
      stock: 0
    },
    {
      id: 6,
      name: 'Molto',
      minimumStock: 10,
      stock: 8
    },
    {
      id: 7,
      name: 'Marlboro',
      minimumStock: 12,
      stock: 8
    },
    {
      id: 8,
      name: 'Slims',
      minimumStock: 12,
      stock: 4
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  data$ = of(mockDashboardData).pipe(delay(1000));

  constructor(private http: HttpClient) {
  }
}
