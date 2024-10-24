import { Component, Input } from '@angular/core';
import { mc6 } from '../../../Models/Interfaz_mc6.ts/mc6';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mc6Service } from '../../../services/Forms/mc6.service';
@Component({
  selector: 'app-checklist-krauss-maffei',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './checklist-krauss-maffei.component.html',
  styleUrl: './checklist-krauss-maffei.component.css'
})
export class ChecklistKraussMaffeiComponent {
  constructor(private mc6Service: Mc6Service) { }
@Input() mc6: any;
 zona_1_2: number = 0;
 zona_3_4: number = 0;
zona_5_6: number = 0;
zona_7_8: number = 0;
zona_9_10: number = 0;
zona_11_12: number = 0;
zona_13_14: number = 0;
zona_15_16: number = 0;
zona_17_18: number = 0;
zona_19_20: number = 0;
zona_21_22: number = 0;

tiempo_de_ciclo: number = 0;
cojin: number = 0;
tiempo_llenado: number = 0;
tiempo_dosificacion: number = 0;

ngOnInit() {
  console.log('mc6:', this.mc6);
  this.calcular();
}
getMaxValue(): number {
  return Math.max(
    this.mc6.Inyeccion_10_p,
    this.mc6.Inyeccion_9_p,
    this.mc6.Inyeccion_8_p,
    this.mc6.Inyeccion_7_p,
    this.mc6.Inyeccion_6_p,
    this.mc6.Inyeccion_5_p,
    this.mc6.Inyeccion_4_p,
    this.mc6.Inyeccion_3_p,
    this.mc6.Inyeccion_2_p,
    this.mc6.Inyeccion_1_p
  );
}
sostenimientoMax(): number{
  return Math.max(
  this.mc6.sostenimiento_seg_1,
  this.mc6.sostenimiento_seg_2,
  this.mc6.sostenimiento_seg_3,
  );
}

sostenimientobarMax(): number{
  return Math.max(
  this.mc6.sostenimiento_bar_1,
  this.mc6.sostenimiento_bar_2,
  this.mc6.sostenimiento_bar_3,
  );
}

calcular(): void {
this.zona_1_2 = this.mc6.c1_1/ this.mc6.c1_2;
this.zona_3_4 = this.mc6.c1_3/ this.mc6.c1_4;
this.zona_5_6 = this.mc6.c1_5/ this.mc6.c1_6;
this.zona_7_8 = this.mc6.c1_7/ this.mc6.c1_8;
this.zona_9_10 = this.mc6.c1_9/ this.mc6.c1_10;
this.zona_11_12 = this.mc6.c1_11/ this.mc6.c1_12;
this.zona_13_14 = this.mc6.c2_1/ this.mc6.c2_2;
this.zona_15_16 = this.mc6.c2_3/ this.mc6.c2_4;
this.zona_17_18 = this.mc6.c2_5/ this.mc6.c2_6;
this.zona_19_20 = this.mc6.c2_7/ this.mc6.c2_8;
this.zona_21_22 = this.mc6.c2_9/ this.mc6.c2_10;

this.tiempo_de_ciclo = (this.mc6.Tiempo_ciclo_mtol + this.mc6.Tiempo_ciclo_tol)/2;
this.cojin = (this.mc6.cojin_mtol + this.mc6.cojin_tol)/2;
this.tiempo_llenado = (this.mc6.Tiempo_llenado_mtol + this.mc6.Tiempo_llenado_tol)/2;
this.tiempo_dosificacion = (this.mc6.Tiempo_Dosificacion_mtol + this.mc6.Tiempo_Dosificacion_tol)/2;
}

}
