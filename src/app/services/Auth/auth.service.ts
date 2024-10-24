import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {url} from '../../../Enviroments/enviroment';
import { UserService } from '../User/user.service';

import { UserLogin , UserRegister, LoginResponseInterface} from '../../Models/user';
import { SecureCookieService } from '.././cookies/cookies.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl =  url;

  constructor(
    private http: HttpClient, 
    private cookieService: CookieService,
    private userService: UserService,
    private secureCookieService: SecureCookieService ) { }

  login(data: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${this.apiurl}login/`, data).pipe(
      tap(response => {
        if (!response.user.is_active) {
          throw new Error('User account is inactive'); 
        }
        this.secureCookieService.setSecureCookie('access', response.access);
        this.secureCookieService.setSecureCookie('refresh', response.refresh);
        this.secureCookieService.setSecureCookie('user', response.user);
        console.log('Tokens guardados en las cookies');
      })
    );
  }

  register(data: UserRegister){
    return this.http.post<UserRegister>(`${this.apiurl}register/`, data)
  }

  logout() {
    
        this.secureCookieService.delete('access');
        this.secureCookieService.delete('refresh');
        this.secureCookieService.delete('user');
        console.log('Sesión cerrada y tokens eliminados');
        
  }
  
  
 
  isAuthenticated(): boolean {
    return !!this.cookieService.get('access');
  }
  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiurl}token/refresh/`, { refresh: refreshToken });
  }
}