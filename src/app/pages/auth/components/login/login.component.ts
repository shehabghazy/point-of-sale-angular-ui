import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {catchError, take} from 'rxjs/operators';
import {AuthStore} from '../../../../store/auth.store';
import {Observable, throwError} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {AuthCookieService} from '../../../../core/services/auth-cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [false]
  });
  hide = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authStore: AuthStore,
    private snackBar: MatSnackBar,
    private router: Router,
    private authCookie: AuthCookieService
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.authService.login(this.form.value).pipe(take(1), catchError(err => this.errorHandler(err))).subscribe(res => {
      if (res) {
        this.authStore.setUserState(res.user, res.token);
        this.authCookie.setAuth(res.token);
        this.authCookie.setRemember(this.form.get('remember')?.value + '');
        this.openSnackBar('Logged in successfully.', 'success-snackbar');
        this.router.navigate(['/home']).then();
      }
    });
  }



  // error: any will be  HttpErrorResponse when connected with backend
  errorHandler(error: any): Observable<any> {
    // error will be replaced with error.message
    this.openSnackBar(error, 'alert-snackbar');
    return throwError(error.message || 'Server error.');
  }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass
    });
  }
}
