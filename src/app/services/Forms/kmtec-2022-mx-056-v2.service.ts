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
    t_supervi:0,
    inyeccion1v: 0,
    inyeccion2v: 0,
    inyeccion3v: 0,
    inyeccion4v: 0,
    inyeccion5v: 0,
    inyeccion1p: 0,
    inyeccion2p: 0,
    inyeccion3p: 0,
    inyeccion4p: 0,
    inyeccion5p: 0,
    inyeccion1s: 0,
    inyeccion2s: 0,
    inyeccion3s: 0,
    inyeccion4s: 0,
    inyeccion5s: 0,
    tiempo_inyeccion: 0,
    tiempo_calentamiento: 0,

    sostenimiento_mm: 0,
    presion_bar1: 0,
    presion_bar2: 0,
    presion_bar3: 0,
    tiempo_seg1: 0,
    tiempo_seg2: 0,
    tiempo_seg3: 0,
    niveles: 0,
    cojin_mm: 0,
    n_value: 0,
    p_value: 0,
    s_value1: 0,
    s_value2: 0,
    s_value3: 0,
    v_value1: 0,
    v_value2: 0,
    carga_niveles: 0,
    tiempo_carga: 0,

    cojin: 0,
    parametros_salida_tiempo_inyeccion: 0,
    parametros_salida_tiempo_carga: 0,
    tiempo_ciclo: 0,
    presion_conmutacion: 0,
    indice_viscosidad: 0,

    set_zona101: 0,
    set_zona102: 0,
    set_zona103: 0,
    real_zona101: 0,
    real_zona102:0,
    real_zona103: 0,
    set_temp: 0,
    real_temp:0,
    Z1_Set:0,
    Z2_Set:0,
    Z3_Set:0,
    Z4_Set:0,
    Z17_Set:0,
    Z18_Set:0,
    Z19_Set:0,
    Z20_Set:0,
    N_CIRC:0,

    Molde_real_1:0,
    Molde_real_2:0,
    Molde_real_3:0,
    Molde_real_4:0,
    Molde_real_5:0,
    Molde_real_6:0,
    Molde_real_7:0,
    Molde_real_8:0,
    puentes:0,

    vacio_molde:'',
    tiempo_vacio_molde:0,
    nivel_vacio:0,

    etapa_1:0,
    etapa_2:0,
    etapa_repetida_1:0,
    etapa_repetida_2:0,
    f_70:0,
    f_55:0,
    contador_vibraciones:0,
    posicion_molde:'',
    s_2_1:0,
    v_50:0,
    v_35:0,
    v_85:0,
    f_42:0,
    carrera:20,
    corteDeVena:0,
    funcionCorteVenaNoyo:0,
    estampadoSeparacionBebedero:0,
    avanceExpulsorPresion:0,
    tiempoRetardoAvanceConectado:0,
    tiempoRetardoAvanceDesconectado:0,
    supervisionRecorridoDesbloqueo:0,

    f1:0,
    f2:0,
    f3:0,
    fuerzaCierre1:0,
    fuerzaCierre2:0,
    fuerzaCierre3:0,
    limiteFuerzaDesplazamiento:0,
    carreraApertura:0,
    carreraApertura2:0,
    carreraApertura3:0,
    n1:0,
    n2:0,
    n3:0,
    s1:0,
    s2:20,
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