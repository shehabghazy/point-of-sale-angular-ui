import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  drawerToggle = new BehaviorSubject<boolean>(false);
  drawerToggle$ = this.drawerToggle.asObservable();
  navItems = [
    {
      label: 'Dashboard',
      path: 'dashboard',
      icon: 'graph',
      roles: ['admin', 'user', 'adminuser']
    },
    {
      label: 'Manage Users',
      path: 'manage-users',
      icon: 'people',
      roles: ['admin']
    },
    {
      label: 'Settings',
      path: 'settings',
      icon: 'settings',
      roles: ['user']
    }
  ];

  constructor() {
  }

  toggle(): void {
    this.drawerToggle.next(!this.drawerToggle.value);
  }
}
