import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { secret } from '../../../Enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SecureCookieService {
  private encryptionKey = secret; 

  constructor(private cookieService: CookieService) { }

  setSecureCookie(name: string, value: any) {
    const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), this.encryptionKey).toString();
    this.cookieService.set(name, encryptedValue);
  }

  getSecureCookie(name: string): any {
    const encryptedValue = this.cookieService.get(name);
    if (encryptedValue) {
    try {
   
      const bytes = CryptoJS.AES.decrypt(encryptedValue, this.encryptionKey);
      const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedValue);
    } catch (error) {
        console.error('Error al descifrar la cookie:', name,error);
        return null; 
      }}
    return null;
  }

  delete(name: string) {
    this.cookieService.delete(name);
  }
}
