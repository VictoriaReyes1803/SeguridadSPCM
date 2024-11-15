import { Injectable } from '@angular/core';
import { km056 } from '../../Models/Formatos.ts/km056';

@Injectable({
  providedIn: 'root'
})
export class KMTEC2022MX056V2Service {

  private readonly initialState: km056;
  constructor() { 
    
    this.initialState = { ...this.KM056 };
  }
  private KM056: km056 ={
    Archivo: '',
    Disquete: '',
    Molde: '',
    Porc_pigmento: 0,
    Num_Cav_th: 0,
    Num_Cav_real: 0,
    editado_por: '',
    
  }
  getlist(): km056{
    return this.KM056;
  }
  setlist(data:Partial<km056>): void{
    this.KM056 = {...this.KM056, ...data};
  }

  resetList(): void {
      this.KM056 = { ...this.initialState };
      console.log('resetList:', this.KM056);
  }}