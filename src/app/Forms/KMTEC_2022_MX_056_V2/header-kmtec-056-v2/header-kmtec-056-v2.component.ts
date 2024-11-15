import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mc6Service } from '../../../services/Forms/mc6.service';
import { mc6 } from '../../../Models/Formatos.ts/mc6';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-kmtec-056-v2',
  standalone: true,
  imports: [
    CommonModule,
  
    FormsModule
  ],
  templateUrl: './header-kmtec-056-v2.component.html',
  styleUrl: './header-kmtec-056-v2.component.css'
})
export class HeaderKMTEC056V2Component {
  constructor(private mc6Service: Mc6Service) { }
  @Input() cliente: string | null = null;
  @Input() Producto_Maquina: string | null = null;
  @Input() maquina: string | null = null;

  @Input() producto: string | null = null;
 
  @Input() Archivo: string | null = null;
  @Input() Disquete: string | null = null;

  @Input() Num_Cav_th: number | null = null;
  @Input() Num_Cav_real: number | null = null;
  

  @Input() Molde: string | null = null;
  @Input() Resina: string | null = null;
  @Input() estado: boolean = false;
  @Input() Fecha: string | null = null;
  

  @Output() cambioValores = new EventEmitter<any>();

  ngOnInit() {
    console.log('estadooo:', this.estado, typeof this.estado);
  }
 
  onInputChange() {
    this.cambioValores.emit({
      Archivo: this.Archivo,
      Disquete: this.Disquete,
      
    });
    console.log('cambioValores:', this.Archivo, this.Disquete );
  }
  
}
