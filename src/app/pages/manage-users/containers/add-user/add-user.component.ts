import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {UsersService} from '@core/services/users.service';
import {take} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {handleServerSideValidation} from '@core/utils/server-side-validation';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {patternValidator} from '@core/utils/custom-validators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  hide = true;
  roles = [
    {
      label: 'Manager',
      value: 'manager'
    },
    {
      label: 'Economist',
      value: 'economist'
    },
    {
      label: 'User',
      value: 'user'
    }
  ];

  form = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required,
      patternValidator(/\d/, {hasNumber: true}),
      patternValidator(/[A-Z]/, {hasCapitalCase: true}),
      patternValidator(/[a-z]/, {hasSmallCase: true}),
      patternValidator(/[!-\/:-@[-`{-~]/, {hasSpecialCharacters: true}),
      Validators.minLength(8)
    ])],
    role: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  submit(): void {
    this.users.create(this.form.value).pipe(take(1)).subscribe(
      value => {
        this.router.navigate(['manage-users']).then();
        this.snackBar.open('User created successfully', 'close', {duration: 1000});
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.openSnackBar(error.error.message, 'alert-snackbar');
          }
          if (typeof error.error.message === 'string') {
            this.openSnackBar(error.error.message, 'alert-snackbar');
          }
          const unhandledErrors = handleServerSideValidation(error, this.form);
          console.log(unhandledErrors, error);
          if (unhandledErrors) {
            this.openSnackBar(error.statusText, 'error');
          }
        }
      }
    );
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
