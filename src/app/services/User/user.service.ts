import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from '../../../Enviroments/enviroment';
import { User } from '../../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;

  constructor() { }
  
}
