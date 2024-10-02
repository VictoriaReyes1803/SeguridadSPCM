import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {url} from '../../../Enviroments/enviroment';
import { UserLogin , UserRegister, LoginResponseInterface} from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl =  url;

  constructor(private http: HttpClient, private cookieService: CookieService ) { }

  login(data: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${this.apiurl}login/`, data).pipe(
      tap(response => {
        this.cookieService.set('access', response.access);
        this.cookieService.set('refresh', response.refresh);
        console.log('Tokens guardados en las cookies');
      })
    );
  }

  register(data: UserRegister){
    return this.http.post<UserRegister>(`${this.apiurl}register/`, data)
  }

  logout() {
    this.cookieService.delete('access');
    this.cookieService.delete('refresh');
  }

  isAuthenticated(): boolean {
    return !!this.cookieService.get('access');
  }
}