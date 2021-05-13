import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  navItems = [
    {
      label: 'Products',
      path: 'products',
      icon: 'category',
      roles: ['admin', 'manager']
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
}
