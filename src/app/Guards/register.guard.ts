import { CanActivateFn,  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable,inject } from '@angular/core';
import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';

export const registerGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const secureCookieService = inject(SecureCookieService);
  const router = inject(Router);

  const user = secureCookieService.getSecureCookie('user');

  if (user && user.rol === 'admin') {
    return true; 
  } else {
    router.navigate(['/']); 
    return false; 
  }
};
