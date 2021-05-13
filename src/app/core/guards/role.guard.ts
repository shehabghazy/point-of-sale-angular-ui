import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '@app/pages/auth/services/auth.service';
import {pluck} from 'rxjs/operators';
import {LayoutService} from '@app/layout/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private layoutService: LayoutService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // debugger;
    // // return this.checkRolePermission(route);
    // let role: string | null;
    // const response = this.auth.auth$.pipe(pluck('role')).subscribe(
    //   value => {
    //     role = value;
    //     if (role !== null) {
    //       this.layoutService.navItems.map(navItem => {
    //         if (navItem.roles.includes(role as string)) {
    //           return true;
    //         } else {
    //           return;
    //         }
    //       });
    //     }
    //     return false;
    //   }
    // );
    // return response;
    return true;



  }

  // checkRolePermission(route: ActivatedRouteSnapshot): boolean {
  //
  //   this.router.navigate(['/dashboard']).then();
  //   return false;
  // }

}
