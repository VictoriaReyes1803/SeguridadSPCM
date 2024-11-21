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
    contador_vibraciones: '',
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
    fuerzaCierre4:0,
    limiteFuerzaDesplazamiento:0,
    carreraApertura:0,
    carreraApertura2:0,
    carreraApertura3:0,
    n1:0,
    n2:0,
    n3:0,
    s1:0,
    s2:20,
    cerrars2: 0,
    cerrars1: 0,
    carreraApertura7: 0,

    inyeccionRetardado: 'NA',
    posicionHusillo: 0,
    velocidadApertura: 0,
    ventilacioncarreraApertura: 0,
    tiempoVentilacion: 0,
    velocidadCierre: 0,
    finalPurgarAire: 0,
    fuerzaDesplazamiento: 0,
    FUNCION_DE_ESTAMPADO: 'NO',
    Inicio_de_fuerza_de_cierre: 'NA',

    noyos1: 'NA',
    noyos2: 'NA',
    noyos3: 'NA',
    noyos4: 'NA',
    noyos5: 'NA',
    noyos6: 'NA',
    noyos7: 'NA',
    noyos8: 'NA',
    noyos9: 'NA',
    noyos10: 'NA',

    noyo1_1: 'NA',
    noyo1_2: 'NA',
    noyo1_3: 'NA',
    noyo2_1: 'NA',
    noyo2_2: 'NA',
    noyo2_3:'NA',
    noyo2_4:'NA',
    noyo2_5: 'NA',

    expulsorTn: 'NA',
    expulsorP: 'NA',
    expulsorQ: 'NA',
    retirar_expulsorP: 'NA',
    retirar_expulsorTn:'NA',

    interruptorDetras: 0,
    posicionInt3: 0,
    posicionInt2: 0,
    posicionInt1: 0,
    carreraVibraciones: 0,
    carreraExpulsor: 0,

    narizApoyada: 0,
    tipoNariz: 0,
    diametroNariz : 0,
    proceso: 0,
    supervCiclo: 0,
    tiempoCiclo: 0,
    diametroHusillo: 0,
    pesoColada: 0,
    pesoPieza: 0,
    programaRobot: 0,

    tiempoTolvaDerecha: 0,
    tiempoTolvaIzquierda: 0,
    sentidoGiroTolva: '',
    embutidoRetardado: 0,
    revolucionesTolva: 0,
    revolucionesHusillo: 0,
    tiempoRetardoSupervision: 0,
    presionEmb: 0,
    toleranciaPresionEmb: 0,
    regulacionPresionEmb: 0,
    temperatura: 0,
    f_1: 0,
    v_1:0,
    na1: '',
    na2: '',
    na3: '',
    na4: '',
    na5: '',
    na6: '',

    // checklist

    tolerancia_zona101:'+/- %',
    tolerancia_zona102:'+/- %',
    tolerancia_zona103:'+/- %',
    set_limite_presion_max:0,
    tolerancia_limite_presion_max:'+/- %',
    set_corte:0,
    tolerancia_corte:'+/- %',
    tolerancia_tiempo_seg2:'+/- %',
    tolerancia_presion_bar2:'+/- %',
    tolerancia_tiempo_calentamiento:'+/- %',
    tolerancia_n_value:'+/- %',
    tolerancia_p_value:'+/- %',
    tolerancia_s_value2:'+/- %',
    tolerancia_s_value3:'+/- %',
    Z1_Tolerancia:'+/- %',
    Z2_Tolerancia:'+/- %',
    Z3_Tolerancia:'+/- %',
    Z4_Tolerancia:'+/- %',
    Z17_Tolerancia:'+/- %',
    tolerancia_Z18_Set:'+/- %',
    tolerancia_Z19_Set:'+/- %',
    tolerancia_Z20_Set:'+/- %',
    tolerancia_valvulas:'SI/NO',
    circulacion_agua:'NA',
    tolerancia_circulacion_agua:'SI/NO',
    tablas_calidad:'SI/NO',
    tolerancia_tiempoCiclo0:'+/- ',
    tolerancia_cojin_mm:'+/- ',
    tolerancia_tiempo_inyeccion:'+/- ',
    tolerancia_tiempo_carga:'+/- ',
    tolerancia_presion_conmutacion:'+/- ',
    tolerancia_indice_viscosidad:'+/- ',

    toleranciaa_Inicio_de_fuerza_de_cierre1:'+/- %',
    tolerancia_fuerzaCierre1:'+/- %',
    fuga_nariz:'SI/NO',
    segrega_disparos:'SI/NO',
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