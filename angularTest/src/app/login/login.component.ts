import { Component } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public emailValue: string

  ngOnInit() {}

  onLoginClick() {
    console.log('email value ' + this.emailValue)
  }
}
