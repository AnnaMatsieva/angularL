import { Injectable } from '@angular/core'
import { Users } from 'src/app/users/users.module'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = true
  private token = 'qwerty'
  private users: Users = { id: 1, firstName: 'Ann', lastName: 'Sample' }

  constructor() {}

  login() {
    localStorage.setItem(this.token, JSON.stringify(this.getUsersInfo()))
    this.isAuthenticated = true

    console.log('logged')
  }

  logout() {
    localStorage.removeItem(this.token)
    this.users = null
    this.isAuthenticated = false
  }

  getUsersInfo(): Observable<Users> {
    return of(this.users)
  }
}
