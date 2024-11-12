import { Injectable } from '@angular/core';
import { mc6 } from '../../Models/Formatos.ts/mc6';
import { initZone } from 'zone.js/lib/zone-impl';

@Injectable({
  providedIn: 'root'
})
export class Mc6Service {
  private readonly initialState: mc6;
  constructor() { 
    
    this.initialState = { ...this.mc6_1 };
  }
  private mc6_1: mc6 ={
    Arch_Disq: '',
    Producto_2: '',
    Molde: '',
    Pigmento: '',
    Porc_pigmento: 0,
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


    sostenimiento_bar_1: 0,
    sostenimiento_bar_2: 0,
    sostenimiento_bar_3: 200,
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
    c1_11: 0,
    c1_12: 0,

    c2_1: 0,
    c2_2: 0,
    c2_3: 0,
    c2_4: 0,
    c2_5: 0,
    c2_6: 0,
    c2_7: 0,
    c2_8: 0,
    c2_9: 0,
    c2_10: 0,
    c2_11: 0,
    c2_12: 0,

    Temp_secador: 0,
    Max_Humedad: 0,
    Tiempo_secado: 0,
    Dew_Point: 0,

    Tiempo_ciclo_SET: 0,
    cojin_SET : 0,
    Tiempo_llenado_SET: 0,
    Tiempo_Dosificacion_SET: 0,

    Tiempo_ciclo_tol: 0,
    cojin_tol: 0,
    Tiempo_llenado_tol: 0,
    Tiempo_Dosificacion_tol: 0,

    Tiempo_ciclo_mtol: 0,
    cojin_mtol: 0,
    Tiempo_llenado_mtol: 0,
    Tiempo_Dosificacion_mtol: 0,

    Boquilla_Molde: 0,

    In_Abierto_1: 0,
    In_Abierto_2: 0,
    In_Abierto_3: 0,
    In_Abierto_4: 0,

    In_cerrado_1: 0,
    In_cerrado_2: 0,
    In_cerrado_3: 0,
    In_cerrado_4: 0,

    Sost_Abierto_1: 0,
    Sost_Abierto_2: 0,
    Sost_Abierto_3: 0,
    Sost_Abierto_4: 0,

    Sost_Cerrado_1: 0,
    Sost_Cerrado_2: 0,
    Sost_Cerrado_3: 0,
    Sost_Cerrado_4: 0,

    Volumen_carga: 0,
    Volumen_max: 106.02,

    consumo: 0,
    rate_pzas: 0,
    seg_piezas: 0,

    Peso_Colada: 3.27,
    diametro_huisillo: 0,
    Peso_pieza_1: 0,
    Peso_pieza_2: 0,
    peso_disparo: 0,
    T_resistencia: 0,
    Volumen_cargaa: 0,

    // Hoja 2
    carrera_apertura: 0,

    cerrar_f1: 0,
    cerrar_f2: 0,
    cerrar_f3: 0,
    cerrar_f4: 0,
    cerrar_f5: 0,
    cerrar_v1: 0,
    cerrar_v2: 0,
    cerrar_v3: 0,
    cerrar_v4: 0,
    cerrar_v5: 0,
    cerrar_s1: 0,
    cerrar_s2: 0,
    cerrar_s3: 0,
    cerrar_s4: 0,
    cerrar_s5: 0, 

    fuerza_cierre_kn: 0,
    fuerza_cierre_mm: 0,
    duracion_max_lim_desplazamiento: 0,

    abrir_v5: 0,
    abrir_v4: 0,
    abrir_v3: 0,
    abrir_v2: 0,
    abrir_v1: 0,
    abrir_s5: 0,
    abrir_s4: 0,
    abrir_s3: 0,
    abrir_s2: 0,
    abrir_s1: 0,

    posicion_arranque: 0,

    salida_f1: 0,
    salida_f2: 0,
    salida_v1: 0,
    salida_v2: 0,
    salida_s1: 0,


    salida2_f1: 0,
    salida2_f2: 0,
    salida2_v1: 0,
    salida2_v2: 0,
    salida2_s2: 0,
    
    carrera_expulsor: 0,

    arranque_posicion: 0,
    tiempo_retardo: 0,
    avance_expulsor: 0,
    mantener_expulsor: 0,
    carrera_vibraciones: 0,
    contador_vibraciones : 0,

    carrera_grupo: 0,

    avance_velocidad: 0,
    avance_punto_conmut: 0,
    avance_velocidad2: 0,

    retroceso_velocidad: 0,
    retroceso_punto_conmut: 0,
    retroceso_velocidad2: 0,

    noyohidr_1_activo: 0,
    noyohidr_2_activo: 0,
    noyohidr_expulsor_activo: 0,

    noyohidr_1_robo: 0,
    noyohidr_2_robo: 0,
    noyohidr_expulsor_robo: 0,

    noyoppmm_1_activo: 0,
    noyoppmf_2_activo: 0,

    noyoppmm_1_robo: 0,
    noyoppmf_2_robo: 0,

    noyohidr_ppmf_activo: 0,
    noyohidr_ppmf_robo: 0,

    salida_noyos2_p: 0,
    salida_noyos2_q: 0,

    entrada_noyos2_p: 0,
    entrada_noyos2_q: 0,

    salida_noyosexp_p: 0,
    salida_noyosexp_q: 0,

    entrada_noyosexp_p: 0,
    entrada_noyosexp_q: 0,

    salida_noyos1_p: 0,
    salida_noyos1_q: 0,
    entrada_noyos1_p: 0,
    entrada_noyos1_q: 0,


    tolerancia1: '±  °C',
    tolerancia2: '±  °C',
    tolerancia3: '±  °C',
    tolerancia4: '±  °C',
    tolerancia5: '±  °C',
    tolerancia6: '±  °C',
    tolerancia7: '±  °C',
    tolerancia8: '±  °C',
    tolerancia9: '±  °C',
    tolerancia10: '±  %',
    tolerancia11: '±  %',
    tolerancia12: '±  %',
    tolerancia13: '±  %',
    tolerancia14: '±  %',
    tolerancia15: '±  %',
    tolerancia16: '±  %',
    tolerancia17: '±  %',
    tolerancia18: '±  %',
    tolerancia19: '±  °C',
    tolerancia20: '±  °C',
    tolerancia21: '±  °C',
    tolerancia22: '±  °C',
    tolerancia23: '±  °C',
    tolerancia24: '±  °C',
    tolerancia25: '±  °C',
    tolerancia26: '±  °C',
    tolerancia27: '±  °C',
    tolerancia28: '±  °C',
    tolerancia29: '±  °C',
    tolerancia30: '±  %',
    tolerancia31: '±  %',
    tolerancia32: '±  %',
    tolerancia33: '±  %',
    tolerancia34: '±  %',

  }
  getlist(): mc6{
    return this.mc6_1;
  }
  setlist(data:Partial<mc6>): void{
    this.mc6_1 = {...this.mc6_1, ...data};
  }

  


  resetList(): void {
      this.mc6_1 = { ...this.initialState };
      console.log('resetList:', this.mc6_1);
  }
}
