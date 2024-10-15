import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private cookieService: CookieService) {}

  canActivate(): boolean {
    const token = this.cookieService.get('access');
    
    if (token) {
      return true;
    } else {
      this.logoutAndRedirect();
    
      return false;
    }
  }
  private logoutAndRedirect() {
    // Eliminar los tokens y redirigir al login
    this.cookieService.delete('access');
    this.cookieService.delete('refresh');
    this.router.navigate(['/']);
  }
}
