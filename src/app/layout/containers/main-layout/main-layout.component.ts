import {Component, OnInit} from '@angular/core';
import {AuthStore} from '../../../store/auth.store';
import {Router} from '@angular/router';
import {AuthCookieService} from '../../../core/services/auth-cookie.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  username = this.authStore.loggedUserState.user.username;

  constructor(
    private authStore: AuthStore,
    private router: Router,
    private authCookie: AuthCookieService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authStore.logout();
    this.authCookie.deleteAuth();
    this.router.navigate(['auth/login']).then();
  }

}
