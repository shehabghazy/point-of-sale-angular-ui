import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '@app/pages/auth/services/auth.service';
import {map, pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.auth.auth$.pipe(
      pluck('access_token'),
      map(token => !token)
    );
  }

}
