import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import {TU_ACCESS_KEY, TU_SECRET_KEY} from '../../../Enviroments/enviroment';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../../Enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class DigitalOceanService {

  constructor(private http: HttpClient) { }
  private apiurl = url;
 
  postpdf(formdata: any ): Observable<any> {
    return this.http.post<any>(`${this.apiurl}pdf/`, formdata);
  }

  getpdfs(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}pdfs/`);
  }
 
  putpdf(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiurl}update/`, data);
  }
}

