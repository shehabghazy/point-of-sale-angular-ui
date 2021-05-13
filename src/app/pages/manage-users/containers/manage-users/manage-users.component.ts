import { Component, OnInit } from '@angular/core';
import {UsersService} from "@core/services/users.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  constructor(private users: UsersService) { }

  ngOnInit(): void {
  }

}
