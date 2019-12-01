import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { Users } from 'src/app/users/users.module'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: Users
  private sub: Subscription

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.login()

    this.sub = this.authService.getUsersInfo().subscribe(user => {
      this.user = user
    })
  }

  // onLoginClick() {
  //   const el = document.getElementsByClassName('login') as HTMLCollectionOf<HTMLElement>
  //   // const val = document.getElementsByClassName('body') as HTMLCollectionOf<HTMLElement>

  //   if (true) {
  //     for (var i = 0; i < el.length; i++) {
  //       el[i].style.display = 'block'
  //     }
  //     console.log('onLoginClick')
  //   }
  // }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  onLogoffClick() {
    this.authService.logout()
    this.router.navigate(['/login'])
    console.log('onLogoffClick')
  }
}
