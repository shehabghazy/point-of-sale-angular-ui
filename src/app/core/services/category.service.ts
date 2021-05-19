import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@core/api.token';
import { Category } from '@core/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, @Inject(API_URL) private api: string) {}

  allCategories(): Observable<Category[]> {
    const path = `${this.api}/categories`;
    return this.http.get<Category[]>(path);
  }

  createCategory(value: any): Observable<Category> {
    const path = `${this.api}/categories`;
    return this.http.post<Category>(path, value);
  }

  updateCategory(id: number, body: any): Observable<Category> {
    const path = `${this.api}/categories/${id}`;
    return this.http.patch<Category>(path, body);
  }
}
