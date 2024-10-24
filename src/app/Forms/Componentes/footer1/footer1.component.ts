import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer1',
  standalone: true,
  imports: [],
  templateUrl: './footer1.component.html',
  styleUrl: './footer1.component.css'
})
export class Footer1Component {
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

  

}
