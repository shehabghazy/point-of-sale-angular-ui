import {Component} from '@angular/core';
import {UsersService} from '@core/services/users.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {

  users$ = this.users.all$;

  constructor(private users: UsersService) {
  }

  filterUsers(name: string): void {
    this.users$ = this.users.all$.pipe(map(users => users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))));
  }

}
