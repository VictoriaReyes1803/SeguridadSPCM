import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from '../../../Enviroments/enviroment';
import { UserLogin , UserRegister, LoginResponseInterface} from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl =  url;

  constructor(private http: HttpClient) { }

  login(data: UserLogin): Observable<LoginResponseInterface>{
    return this.http.post<LoginResponseInterface>(`${this.apiurl}login/`, data)
  }

  register(data: UserRegister){
    return this.http.post<UserRegister>(`${this.apiurl}register/`, data)
  }


}
