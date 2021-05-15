import {Inject, Injectable} from '@angular/core';
import {API_URL} from '@core/api.token';
import {HttpClient} from '@angular/common/http';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Shift} from '@core/models/shift.model';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  all$ = this.http.get<Shift[]>(`${this.api}/shifts`).pipe(shareReplay(1));

  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {
  }

  one(id: number): Observable<any> {
    return this.http.get(`${this.api}/shifts/${id}`);
  }

  create(payload: Shift): Observable<any> {
    return this.http.post(`${this.api}/shifts`, payload);
  }

  update(payload: Shift, id: number): Observable<any> {
    return this.http.patch(`${this.api}/shifts/${id}`, payload);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/shifts/${id}`);
  }
}
