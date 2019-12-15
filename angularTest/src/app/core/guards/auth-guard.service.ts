import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { url } = state
    return this.checkLogin(url)
  }

  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isAuthorized) {
      return true
    }

    this.authService.redirectUrl = url

    const loginPageUrlTree = this.router.parseUrl('/login')

    return loginPageUrlTree
  }
}
