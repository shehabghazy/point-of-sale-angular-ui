import {Inject, Injectable} from '@angular/core';
import {API_URL} from '@core/api.token';
import {HttpClient} from '@angular/common/http';
import {User} from '@core/models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  all$ = this.http.get<User[]>(`${this.api}/users`);

  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {
  }

  one(id: number): Observable<any> {
    return this.http.get(`${this.api}/users/${id}`);
  }

  create(payload: User): Observable<any> {
    return this.http.post(`${this.api}/users`, payload);
  }

  update(payload: User, id: number): Observable<any> {
    return this.http.patch(`${this.api}/users/${id}`, payload);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/users/${id}`);
  }


}
