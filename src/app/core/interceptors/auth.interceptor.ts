import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService, AuthState} from '@app/pages/auth/services/auth.service';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.auth.auth$.pipe(
      switchMap((auth: AuthState) => {
        const {access_token} = auth;
        if (access_token) {
          const authReq = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${access_token}`)
          });
          return next.handle(authReq);
        } else {
          return next.handle(request);
        }
      }));
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
