import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '@core/services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {handleServerSideValidation} from '@core/utils/server-side-validation';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  loading = false;
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
    id: [null, Validators.required],
    name: [null, Validators.required],
    email: [null, Validators.required],
    role: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.getUser(this.route.snapshot.params.id).subscribe(response => {
      if (response) {
        this.form.patchValue(response);
        this.loading = false;
      }

    });
  }

  getUser(id: number): Observable<any> {
    return this.users.one(id);
  }

  submit(): void {
    this.users.update(this.form.value, this.form.get('id')?.value).pipe(take(1)).subscribe(
      value => {
        this.router.navigate(['manage-users']).then();
        this.snackBar.open('User edited successfully', 'close', {duration: 1000});
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
