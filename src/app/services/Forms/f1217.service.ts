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
    s1_dosificacion:0,
    p1_dosificacion:0,
    retromm:0,
    retrocesomm2:0,
    retromms:0,
    regimen_giro:0,
    posicion_relativa:0,
    posicion_relativa2:0,
    tiempoEnfriamiento:0,
    tiempoEnfriamientouso:0,
    conmutacionVp_puntoInicio :0,
    conmutacionVp_puntoFinal:0,
    conmutacionVp_reaccionvigilancia:0,
    presionMantenimiento_tiempo1:0,
    presionMantenimiento_tiempo2:0,
    presionMantenimiento_presion2:0,
    presionMantenimiento_presion1:0,
    criterio_conmutacion:0,
    presionMantenimiento_presionInicio:0,
    vigilancia_colchonMax:0,
    vigilancia_colchonMin:0,
    unidadCierreCerrar_mm1:0,
    unidadCierreCerrar_v1:0,
    unidadCierreCerrar_mm2:0,
    unidadCierreCerrar_v2:0,
    unidadCierreCerrar_mm3:0,
    unidadCierreCerrar_v3:0,
    movimientoconbloqueo:'',
    proteccionMolde:'',
    fcierre:0,
    abrir1s:0,
    abrir1v:0,
    abrir2s:0,
    abrir2v:0,
    expulsor_avance_s:0,
    expulsor_avance_v:0,
    expulsor_avance_f: 0,
    expulsor_retroceder_s: 0,
    expulsor_retroceder_v: 0,
    expulsor_retroceder_f: 0,
    secadoMaterial_temperatura: 0,
    temperaturas_zona10: 0,
    temperaturas_zona13: 0,
    temperaturas_zona14: 0,
    temperaturas_zona15: 0,
    temperaturas_zona16: 0,
    temperaturas_zona17: 0,
    temperaturas_zona18: 0,
    temperaturas_zona20: 0,

    tiemposSoplado_desmolFija2: 0,
    tiemposSoplado_desmol1PM1: 0,
    tiemposSoplado_tiempoNA: 0,
    tiemposSoplado_tiempoNA2: 0,
    temperaturasMolde_zona401: 0,
    temperaturasMolde_zona402: 0,
    enfriamientoMolde: 0,

    calidadProceso_tiempoDosificacion_nominal: 0,
    calidadProceso_tiempoDosificacion_tolerancia: 0,
    calidadProceso_puntoConmutacion_nominal: 0,
    calidadProceso_puntoConmutacion_tolerancia: 0,
    calidadProceso_valorMaxPMH_nominal: 0,
    calidadProceso_valorMaxPMH_tolerancia: 0,
    calidadProceso_inicioInyeccion_nominal: 0,
    calidadProceso_valorMaxPMI_tolerancia: 0,
    calidadProceso_valorMaxPMI_nominal: 0,
    calidadProceso_inicioInyeccion_tolerancia: 0,
    calidadProceso_colchonMaterial_nominal: 0,
    calidadProceso_colchonMaterial_tolerancia: 0,
    calidadProceso_tiempoCiclo_nominal: 0,
    calidadProceso_tiempoInyeccion_nominal:0,
    calidadProceso_tiempoCiclo_tolerancia: 0,
    calidadProceso_tiempoInyeccion_tolerancia: 0,

    piezaInfo_narizApoyada: 0,
    piezaInfo_tipoNariz: 0,
    piezaInfo_diametroNariz: 0,
    piezaInfo_programaRobot: 0,
    piezaInfo_pesoPieza: 0,
    piezaInfo_rate: 0,
    piezaInfo_tiempoSostenimientoMin: 0,
    piezaInfo_comentarios: '',
    piezaInfo_lotePigmento: '',
    piezaInfo_loteResina: '',
    piezaInfo_diamHusillo: 0,
    piezaInfo_supervCiclo: 0,
    piezaInfo_tiempoCiclo: 0,
    piezaInfo_numDispSeg: 0,
    piezaInfo_proceso: 0,
    piezaInfo_pesoColada: 0,
    piezaInfo_tiempoSostenimientoMax: 0,
    temperaturasMolde_zona1: 0,
    temperaturasMolde_zona2: 0,
  };

  
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
