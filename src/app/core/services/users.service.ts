import {Inject, Injectable} from '@angular/core';
import {API_URL} from '@core/api.token';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(API_URL) private api: string) {
  }
}
