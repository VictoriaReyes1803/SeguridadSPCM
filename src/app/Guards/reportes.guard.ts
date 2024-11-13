import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root',
})
export class UserRoleGuard implements CanActivate {
  constructor(private securecookieservice: SecureCookieService , private router: Router) {}
  user: User | null = null;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.user = this.securecookieservice.getSecureCookie('user'); // Obtener el rol del usuario de las cookies

    if (this.user?.rol === 'admin' || this.user?.rol === 'engineer') {
      return true; 
    }

    this.router.navigate(['/']); 
    return false; 
  }
}
