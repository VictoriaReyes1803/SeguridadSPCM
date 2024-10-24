import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-spiner',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './spiner.component.html',
  styleUrl: './spiner.component.css'
})
export class SpinerComponent {
  @Input() loading: boolean = false;
}
