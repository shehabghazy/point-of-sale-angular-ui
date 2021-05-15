import {Component} from '@angular/core';
import {UsersService} from '@core/services/users.service';
import {map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {

  users$ = this.users.all$;

  constructor(private users: UsersService, private snackBar: MatSnackBar) {
  }

  filterUsers(name: string): void {
    this.users$ = this.users.all$.pipe(map(users => users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))));
  }

  delete(id: number): void {
    this.users.delete(id).subscribe(
      value => {
        this.users$ = this.users$.pipe(map(users => users.filter(u => u.id !== id)));
        this.openSnackBar('User deleted successfully', 'success-snackbar');
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.openSnackBar(error.error.message, 'alert-snackbar');
          }
          if (typeof error.error.message === 'string') {
            this.openSnackBar(error.error.message, 'alert-snackbar');
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
