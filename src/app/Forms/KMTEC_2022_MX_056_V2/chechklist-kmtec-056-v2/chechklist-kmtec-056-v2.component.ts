import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { km056 } from '../../../Models/Formatos.ts/km056';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chechklist-kmtec-056-v2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chechklist-kmtec-056-v2.component.html',
  styleUrl: './chechklist-kmtec-056-v2.component.css'
})
export class ChechklistKMTEC056V2Component {
  @Input() KM056: any;
  @Input() resina: string | null = null;
  @Input() maquina: string | null = null;
  @Input() producto: string | null = null;
  @Input() cliente: string | null = null;

}
