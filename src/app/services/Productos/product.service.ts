import { Injectable } from '@angular/core';
import {url} from '../../../Enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { SecureCookieService } from '../cookies/cookies.service';
import { Maquina } from '../../Models/Maquina';
import { Reporte, Reporteresponse } from '../../Models/Reporte';
import { Productos, Producto_Maquina } from '../../Models/Productos';
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

  getProducto_Maquina(ruta: string): Observable<Producto_Maquina> {
    return this.http.get<Producto_Maquina>(`${this.apiurl}producto-maquina/${ruta}/`);
  }

  getMaquinas(): Observable<Maquina[]> {
    return this.http.get<Maquina[]>(`${this.apiurl}maquinas/`);
  }

  postReporte(data: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(`${this.apiurl}reportes/`, data);
  }
  getReporte(id: number): Observable<Reporteresponse> {
    return this.http.get<Reporteresponse>(`${this.apiurl}reportes/${id}/`);
  }
  getReportes(): Observable<Reporteresponse[]> {
    return this.http.get<Reporteresponse[]>(`${this.apiurl}reportes/`);
  }
  getAllReportes(): Observable<Reporteresponse[]> {
    return this.http.get<Reporteresponse[]>(`${this.apiurl}all-report/`);
  }
}
