import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from '../../../Enviroments/enviroment';
import { User } from '../../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =  url + 'users/';
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

}
