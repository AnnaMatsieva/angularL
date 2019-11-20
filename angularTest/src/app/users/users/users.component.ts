import { Component, OnInit } from '@angular/core'
import { Users } from '../users.interface'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public userItems: Users[] = []

  constructor() {}

  ngOnInit() {}
}
