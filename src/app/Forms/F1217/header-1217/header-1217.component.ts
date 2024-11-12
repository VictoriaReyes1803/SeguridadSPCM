import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {F1217Service} from '../../../services/Forms/f1217.service';
import { FP1217 } from '../../../Models/Formatos.ts/FP1217';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-1217',
  standalone: true,
  imports: [
    CommonModule,
  
    FormsModule
  ],
  templateUrl: './header-1217.component.html',
  styleUrl: './header-1217.component.css'
})
export class Header1217Component {

  constructor(private fp1217: F1217Service ) { }
  @Input() cliente: string | null = null;
  @Input() Producto_Maquina: string | null = null;
  @Input() maquina: string | null = null;
  @Input() Arch_Disq: string | null = null;
  @Input() producto: string | null = null;
  @Input() Molde: string | null = null;
  @Input() Fecha: string | null = null;
  @Input() Num_Cav_th: number | null = null;
  @Input() Num_Cav_real: number | null = null;
  @Input() Resina: string | null = null;
  @Input() Porc_reciclado: number | null = null;
  @Input() Porc_pigmento: number | null = null;

  @Input() estado: boolean = false;
  
  @Output() cambioValores = new EventEmitter<any>();

  ngOnInit() {
    console.log('estadooo:', this.estado, typeof this.estado);
  }
 
  onInputChange() {
    this.cambioValores.emit({
      Arch_Disq: this.Arch_Disq,
      Porc_pigmento: this.Porc_pigmento,
      Porc_reciclado: this.Porc_reciclado,
    });
    console.log('cambioValores:', this.Arch_Disq);
  }



}
