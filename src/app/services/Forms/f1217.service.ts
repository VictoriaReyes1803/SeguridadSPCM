import { Injectable } from '@angular/core';
import { FP1217 } from '../../Models/Formatos.ts/FP1217';

@Injectable({
  providedIn: 'root'
})
export class F1217Service {
  private readonly initialState: FP1217;
  constructor() { 
    
    this.initialState = { ...this.fp1217 };
  }
  private fp1217: FP1217 ={
    Arch_Disq: '',
    Molde: '',
    Porc_reciclado: 0,
  
    Porc_pigmento: 0,
    
    Num_Cav_th: 0,
    Num_Cav_real: 0,
    porc_pigmento: 0,
    editado_por: '',
    

  }
  getlist(): FP1217{
    return this.fp1217;
  }
  setlist(data:Partial<FP1217>): void{
    this.fp1217 = {...this.fp1217, ...data};
  }

  


  resetList(): void {
      this.fp1217 = { ...this.initialState };
      console.log('resetList:', this.fp1217);
  }
}
