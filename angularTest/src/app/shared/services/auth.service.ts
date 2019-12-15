import { Injectable } from '@angular/core'
import { Users } from 'src/app/users/users.module'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = 'qwerty'
  private users: Users = { id: 1, firstName: 'Ann', lastName: 'Sample' }
  redirectUrl: string

  constructor() {}

  get isAuthorized(): boolean {
    // return !!this.getUsersInfo();
    return !!JSON.parse(localStorage.getItem(this.token))
  }

  login(userLogin: string) {
    localStorage.setItem(this.token, userLogin)
  }

  logout() {
    localStorage.removeItem(this.token)
  }

  getUsersInfo(): Users | null {
    if (this.isAuthorized) {
      return this.users
    }
    return null
  }
}
