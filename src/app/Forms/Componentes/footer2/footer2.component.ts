import { Component, Input } from '@angular/core';
import { mc6 } from '../../../Models/Interfaz_mc6.ts/mc6';
@Component({
  selector: 'app-footer2',
  standalone: true,
  imports: [],
  templateUrl: './footer2.component.html',
  styleUrl: './footer2.component.css'
})
export class Footer2Component {
  mc6!: mc6;
  @Input() consumo: number = 0;
  @Input() rate: number = 0;
  @Input() secado_minimo: number = 0;
}
