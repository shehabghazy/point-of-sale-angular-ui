import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AdminExistsGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.adminExists$.pipe(
      map(({ exists }) => exists),
      tap(exists => {
        if (!exists) {
          this.router.navigateByUrl('/auth/createAdmin');
        }
      })
    );
  }

}
