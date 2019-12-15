import { Component, OnInit } from '@angular/core'
import { Users } from 'src/app/users/users.module'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: Users

  constructor(private authService: AuthService, private router: Router) {}

  get hasUserInfo(): boolean {
    return this.authService.isAuthorized
  }

  ngOnInit() {
    this.user = this.authService.getUsersInfo()
  }

  onLogoffClick() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
