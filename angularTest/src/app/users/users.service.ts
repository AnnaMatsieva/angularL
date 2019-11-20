import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Users } from './users.interface'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  register(user: Users) {
    return this.http.post(`auth/register`, user)
  }
}
