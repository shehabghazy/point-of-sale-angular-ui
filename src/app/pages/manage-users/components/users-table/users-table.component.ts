import {Component, Input} from '@angular/core';
import {User} from "@core/models/user.model";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input() data: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'buttons'];

}
