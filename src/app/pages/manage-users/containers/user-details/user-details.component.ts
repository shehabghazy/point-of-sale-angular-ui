import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "@core/services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$ = this.users.one(this.route.snapshot.params.id);

  constructor(private route: ActivatedRoute, private users: UsersService) {
  }

  ngOnInit(): void {
  }

}
