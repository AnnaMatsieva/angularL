import { Component } from '@angular/core'
import { AuthService } from './shared/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Video Course | Main page'

  constructor(private authService: AuthService) {}

  get userIsAuthorized(): boolean {
    return this.authService.isAuthorized
  }
}
