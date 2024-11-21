import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { SecureCookieService } from '../services/cookies/cookies.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private secureCookieService: SecureCookieService
  ) {}

  canActivate(): boolean {
    const token = this.secureCookieService.getSecureCookie('access');
    if(token){

        const decodedToken: any = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); 

        console.log('token expiration' , decodedToken.exp);
        console.log('current time', currentTime);

        if (decodedToken.exp && decodedToken.exp > currentTime) {

          return true;
        } else {
          this.logoutAndRedirect();
          return false;
        }
      
  }else {return false;}

  //   if (this.isTokenValid(token)) {
  //     console.log('Token is valid');
  //     return true;
  //   } else {
  //     console.log('Token is invalid');
  //     this.logoutAndRedirect();
    
  //     return false;
    
  // }

}
private logoutAndRedirect() {
  Swal.fire({
    title: 'Sesión expirada',
    text: 'Por favor inicia sesión de nuevo',
    icon: 'error',
    confirmButtonText: 'Ok'
  });
  this.secureCookieService.delete('access');
  this.secureCookieService.delete('refresh');
  sessionStorage.clear();
  this.router.navigate(['/']);
  }}