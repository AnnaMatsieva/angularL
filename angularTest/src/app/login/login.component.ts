import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from '../shared/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public emailValue = ''
  public passwordValue = ''

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isAuthorized) {
      this.router.navigate(['courses'])
    }
  }

  onLoginClick(loginForm: NgForm) {
    this.authService.login(JSON.stringify(loginForm.value))

    const redirectUrl = this.authService.redirectUrl

    if (redirectUrl) {
      this.authService.redirectUrl = null
      this.router.navigateByUrl(redirectUrl)
    } else {
      this.router.navigate(['courses'])
    }
  }
}
