import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UsersService} from "@core/services/users.service";
import {take} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {handleServerSideValidation} from "@core/utils/server-side-validation";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  roles = [
    {
      label: 'Admin',
      value: 'admin'
    },
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
    password: [null, Validators.required],
    role: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.users.create(this.form.value).pipe(take(1)).subscribe(
      value => {
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
