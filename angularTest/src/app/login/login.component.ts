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

  ngOnInit() {}

  onLoginClick(loginForm: NgForm) {
    this.authService.login()
    this.router.navigate(['/courses'])
    console.log('email value ' + this.emailValue)
  }
}
