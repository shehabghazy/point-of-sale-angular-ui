import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from '@core/models/user.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '@app/pages/manage-users/components/confirmation-dialog/confirmation-dialog.component';
import {UsersService} from '@core/services/users.service';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input() data: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  @Output() deletedId = new EventEmitter<number>();
  constructor(public dialog: MatDialog) {
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      disableClose: true
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      if (!!result) {
        this.deletedId.emit(id);
      }
    });
  }
}
