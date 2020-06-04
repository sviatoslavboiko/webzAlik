import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Users } from '../../users.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class usersListComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getLocationTypes();
  }

  getLocationTypes() {
    this.usersService.getUsers()
      .subscribe(usersService => this.users = usersService);
  }
}
