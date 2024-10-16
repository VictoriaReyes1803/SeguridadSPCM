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

ngOnInit() {
  console.log('mc6:', this.mc6);
}
}
