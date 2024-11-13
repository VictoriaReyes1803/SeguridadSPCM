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
    Velocidad_avance: 0,
    Velocidad_colocacion: 0,
    Fuerza_Apoyo: 0,
    posicion: 0,
    velocidad: 0,
    inyeccion1s: 0,
    inyeccion2s: 0,
    inyeccion1v: 0,
    inyeccion2v: 0,

    inyeccion3s: 0,
    inyeccion4s: 0,
    inyeccion3v: 0,
    inyeccion4v: 0,
    inyeccion5v: 0,
    inyeccion5s: 0,
    s1:0,
    t1:0,
    p1:0,
    s2:0,
    t2:0,
    p2:0,
    s3:0,
    t3:0,
    p3:0,
    s4:0,
    t4:0,
    p4:0,
    v_p_switchover_release_pos:0,
    retrocesomm1:0,
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
