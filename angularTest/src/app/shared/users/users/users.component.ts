import { Component, OnInit } from '@angular/core';
import { UsersListItem } from '../users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userItems: UsersListItem[] = [

  ];

  constructor() { }

  ngOnInit() {
  }

}
