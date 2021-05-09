import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthStore} from '../../store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authStore: AuthStore, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRolePermission(route);
  }

  checkRolePermission(route: ActivatedRouteSnapshot): boolean {
    if (this.authStore.token) {
      const userRoles = this.authStore.roles;
      // ['admin']   ['admin', 'user']
      if (userRoles.some(val => route.data.roles.includes(val))) {
        return true;
      } else {
        this.router.navigate(['/dashboard']).then();
        return false;
      }
    }
    this.router.navigate(['/dashboard']).then();
    return false;
  }

}
