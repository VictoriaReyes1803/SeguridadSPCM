import { Injectable } from '@angular/core';
import {url} from '../../../Enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { SecureCookieService } from '../cookies/cookies.service';
import { Productos } from '../../Models/Productos';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl =  url;
  token: string = '';
  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private secureCookieService: SecureCookieService
  ) { }

  getProducts(): Observable<Productos> {
    return this.http.get<Productos>(`${this.apiurl}productos/`);
  }
}
