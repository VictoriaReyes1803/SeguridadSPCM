import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-mc6',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-mc6.component.html',
  styleUrl: './header-mc6.component.css'
})
export class HeaderMc6Component {
  @Input() cliente: string | null = null;
  @Input() Producto_Maquina: string | null = null;
  @Input() maquina: string | null = null;
  @Input() producto_1: string | null = null;
  @Input() Num_Cav_th_1: number | null = null;
  @Input() Num_Cav_real_1: number | null = null;
  @Input() Molde: string | null = null;
  @Input() Resina: string | null = null;
  @Input() estado: boolean = false;
  @Input() Fecha: string | null = null;

  ngOnInit() {
    console.log('estadooo:', this.estado, typeof this.estado);
  }
 
  

}
