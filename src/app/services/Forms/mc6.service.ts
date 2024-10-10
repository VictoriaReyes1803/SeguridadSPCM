import { Injectable } from '@angular/core';
import { mc6 } from '../../Models/Interfaz_mc6.ts/mc6';

@Injectable({
  providedIn: 'root'
})
export class Mc6Service {

  constructor() { }
  private mc6_1: mc6 ={
    Arch_Disq: '',
    Producto_2: '',
    Molde: '',
    Pigmento: '',
    Num_Cav_th_2: 0,
    Num_Cav_real_2: 0,
    Num_Cav_th_1: 0,
    Num_Cav_real_1: 0,
    porc_pigmento: 0,
    editado_por: '',
    t_Supervision: 0,
    sostenimiento_mm: 0,
    carga_n_mm: 0,
    carga_p_bar: 0,

    Inyeccion_10_v: 0,
    Inyeccion_9_v: 0,
    Inyeccion_8_v: 0,
    Inyeccion_7_v: 0,
    Inyeccion_6_v: 0,
    Inyeccion_5_v: 0,
    Inyeccion_4_v: 0,
    Inyeccion_3_v: 0,
    Inyeccion_2_v: 0,
    Inyeccion_1_v: 0,


    sostenimiento_bar_1: 'N/A',
    sostenimiento_bar_2: 'N/A',
    sostenimiento_bar_3: '200',
    carga_s_1: 0,
    carga_s_2: 0,
    carga_s_mm: 0,

    Inyeccion_1_p: 0,
    Inyeccion_2_p: 0,
    Inyeccion_3_p: 0,
    Inyeccion_4_p: 0,
    Inyeccion_5_p: 0,
    Inyeccion_6_p: 0,
    Inyeccion_7_p: 0,
    Inyeccion_8_p: 0,
    Inyeccion_9_p: 0,
    Inyeccion_10_p: 0,

    sostenimiento_seg_1: 0,
    sostenimiento_seg_2: 0,
    sostenimiento_seg_3: 0,

    carga_v: 0,
    carga_v_mms: 0,

    Inyeccion_10_s: 0,
    Inyeccion_9_s: 0,
    Inyeccion_8_s: 0,
    Inyeccion_7_s: 0,
    Inyeccion_6_s: 0,
    Inyeccion_5_s: 0,
    Inyeccion_4_s: 0,
    Inyeccion_3_s: 0,
    Inyeccion_2_s: 0,
    Inyeccion_1_s: 0,

    Sostenimiento_niveles: 0,
    carga_niveles: 0,
    porc_llenado: 0,
    inyeccion_niveles: 0,
    t_enfriamiento: 0,
    retardo_dosificacion: 0,

    temp_barril_14: 0,
    temp_barril_13: 0,
    temp_barril_11: 0,
    temp_barril_6: 0,
    temp_barril_5: 0,
    temp_barril_4: 0,
    temp_barril_3: 0,
    temp_barril_2: 0,
    temp_barril_1: 0,
    temp_barril_brida: 0,

    temp_fija: 0,
    temp_movil: 0,
    temp_otros  : 0,

    porcentual_1: 0,
    porcentual_2: 0,
    porcentual_3: 0,
    porcentual_4: 0,
    porcentual_5: 0,
    porcentual_6: 0,
    porcentual_7: 0,
    porcentual_8: 0,
    porcentual_9: 0,
    porcentual_10: 0,

    flujo_fija: 0,
    flujo_movil: 0,
    flujo_otros: 0,

    c1_1: 0,
    c1_2: 0,
    c1_3: 0,
    c1_4: 0,
    c1_5: 0,
    c1_6: 0,
    c1_7: 0,
    c1_8: 0,
    c1_9: 0,
    c1_10: 0,
  
  }
  getlist(): mc6{
    return this.mc6_1;
  }
  setlist(data:Partial<mc6>): void{
    this.mc6_1 = {...this.mc6_1, ...data};
  }
}
