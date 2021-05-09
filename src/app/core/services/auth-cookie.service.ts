import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {

  constructor(private cookieService: CookieService) {
  }

  getAuth(): string {
    return this.cookieService.get('jwt');
  }

  setAuth(value: string): void {
    this.cookieService.put('jwt', value);
  }

  deleteAuth(): void {
    this.cookieService.remove('jwt');
  }

  setRemember(value: string): void {
    this.cookieService.put('remember', value);
  }

  getRemember(): string {
    return this.cookieService.get('remember');
  }
}
