import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, Productos, Producto_Maquina } from '../../../Models/Productos';
import { Maquina } from '../../../Models/Maquina';
import { User } from '../../../Models/user';
import { HeaderMc6Component } from '../header-mc6/header-mc6.component';
import { Footer3Component } from "../../Componentes/footer3/footer3.component";
import { Footer2Component } from "../../Componentes/footer2/footer2.component";
import { Footer1Component } from '../../Componentes/footer1/footer1.component';
import { mc6 } from '../../../Models/Formatos.ts/mc6';
import { FormsModule } from '@angular/forms';
import { Mc6Service } from '../../../services/Forms/mc6.service';
@Component({
  selector: 'app-krauss-maffei-mc6-2',
  standalone: true,
  imports: [
    CommonModule,
    HeaderMc6Component,
    Footer3Component,
    Footer2Component,
    FormsModule,
    Footer1Component
],
  templateUrl: './krauss-maffei-mc6-2.component.html',
  styleUrl: './krauss-maffei-mc6-2.component.css'
})
export class KraussMaffeiMc62Component {

  constructor(private mc6Service: Mc6Service) { }

  @Input() cliente: string | null = null;
  @Input() maquina: string | null = null;
  @Input() producto_1: string | null = null;
  @Input() Num_Cav_th_1: number | null = null;
  @Input() Num_Cav_real_1: number | null = null;
  @Input() Molde: string | null = null;
  @Input() Resina: string | null = null;
  @Input() Fecha: string | null = null;
  @Input() Producto_Maquina: string | null = null;
  @Input() estado: boolean = false;
  @Input() creado_por: string | null = null;
  @Input() editado_por: string | null = null;
  @Input() editado: string | null = null;


  @Input() Arch_Disq: string | null = null;
  @Input() Num_Cav_th_2: number | null = null;
  @Input() producto_2: string | null = null;
  @Input() Num_Cav_real_2: number | null = null;
  @Input() Pigmento: string | null = null;
  @Input() Porc_pigmento: number | null = null;
  @Input() Producto_2: string | null = null;
  @Input() secado_minimo: number = 0;
  @Input() consumo: number = 0;
  @Input() rate: number = 0;

  @Input() Peso_Colada: number = 0;
  @Input() diametro_huisillo: number = 0;
  @Input() Peso_pieza_1: number = 0;
  @Input() Peso_pieza_2: number = 0;
  @Input() Volumen_cargaa: number = 0;
  @Input() Volumen_max: number = 0;
  @Input() T_resistencia: number = 0;
  @Input() seg_piezas: number = 0;
  @Input() T_secado: number = 0;
  @Input() peso_disparo: number = 0;

  @Input() valores!: mc6;

  @Output() cambioValores = new EventEmitter<any>();
  @Output() cambioValores2 = new EventEmitter<any>();
  mc6!: mc6 ;

  onValoresCambiados(event: any) {
    this.cambioValores.emit(event);
  }
  actualizarValores(event: any) {
    // this.carrera_apertura = event;
    const updateData: Partial<mc6> = {
    };
    this.mc6Service.setlist(updateData);
  }
}
