import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // Asegúrate de instalar y configurar ngx-cookie-service
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

    if (this.user?.rol === 'admin') {
      return true; 
    }

    this.router.navigate(['/']); 
    return false; 
  }
}
