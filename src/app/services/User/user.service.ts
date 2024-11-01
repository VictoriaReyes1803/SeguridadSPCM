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

  putUser(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}update/${id}/`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete/${id}/`);
  }

  getme(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}me/`);
  }

  putme(data: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}me/`, data);
  }

}
