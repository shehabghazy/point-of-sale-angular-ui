import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@core/api.token';
import { Category } from '@core/models/Category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {}

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.api}/products/categories`);
  }

  // -- added to get category By Id -----
  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.api}/products/categories/${id}`);
  }
  // ------------------------------------

  create(value: any): Observable<Category> {
    return this.http.post<Category>(`${this.api}/products/categories`, value);
  }

  update(id: number, body: any): Observable<Category> {
    return this.http.patch<Category>(`${this.api}/products/categories/${id}`, body);
  }
}
