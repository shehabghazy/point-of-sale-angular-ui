import {Component, OnInit} from '@angular/core';
import {AuthStore} from '../../../store/auth.store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  username = this.authStore.loggedUserState.user.username;

  constructor(
    private authStore: AuthStore,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.authStore.logout();
    this.router.navigate(['auth/login']).then();
  }

}
