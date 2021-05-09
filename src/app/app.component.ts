import {Component, OnInit} from '@angular/core';
import {AuthCookieService} from './core/services/auth-cookie.service';
import {AuthStore} from './store/auth.store';
import jwt_decode from 'jwt-decode';
import {JwtToken} from './core/models/jwt.model';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title = 'booking-tool';

  constructor(
    private authCookies: AuthCookieService,
    private authStore: AuthStore
  ) {
  }

  ngOnInit(): void {
    if (this.authCookies.getRemember() === 'false') {
      this.authCookies.deleteAuth();
    }
    if (this.authCookies.getAuth()) {
      const payload: JwtToken = jwt_decode(this.authCookies.getAuth());
      this.authStore.setUserState(payload.user, this.authCookies.getAuth());
    }
  }
}
