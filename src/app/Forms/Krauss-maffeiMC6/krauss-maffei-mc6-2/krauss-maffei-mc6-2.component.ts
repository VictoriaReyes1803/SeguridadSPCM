import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, Productos, Producto_Maquina } from '../../../Models/Productos';
import { Maquina } from '../../../Models/Maquina';
import { User } from '../../../Models/user';
import { HeaderMc6Component } from '../header-mc6/header-mc6.component';
import { Footer3Component } from "../../Componentes/footer3/footer3.component";
import { Footer2Component } from "../../Componentes/footer2/footer2.component";


@Component({
  selector: 'app-krauss-maffei-mc6-2',
  standalone: true,
  imports: [
    CommonModule,
    HeaderMc6Component,
    Footer3Component,
    Footer2Component
],
  templateUrl: './krauss-maffei-mc6-2.component.html',
  styleUrl: './krauss-maffei-mc6-2.component.css'
})
export class KraussMaffeiMc62Component {
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
}
