import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms'; 
import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';
import { Reporte} from '../Models/Reporte';
import { ProductService } from '../services/Productos/product.service';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { format } from 'crypto-js';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    DropdownModule,
    FormsModule,
   CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  user : User | null = null;
  reportes:any;
  selectedReporte: Reporte | null = null;

  selectedOption: string | null = null;
  dropdownOpen: boolean = false;

  @Input() report: boolean = false;
  @Input() formato: string = '';
  @Output() optionSelected = new EventEmitter<any>();

  constructor(
    private cookieService: SecureCookieService,
    private productService: ProductService
  ) { }
  ngOnInit() {
   
   this.user = this.cookieService.getSecureCookie('user');
   console.log(this.user);
    this.loadReportes();

  }
  loadReportes(): void {
    this.productService.getAllReportes().subscribe(
      (data) => {
         
        console.log('reportes',this.reportes);
        if (this.formato) {
          
          this.reportes = data.filter(reporte => reporte.formato === this.formato);
        } else {
          this.reportes = data.filter(reporte => reporte.formato === 'KraussMaffeiMC6');
        }
        console.log('reportes', this.reportes);
        console.log("se logro");

      },
      (error) => {
        console.error('Error al cargar los reportes:', error);
      }
    );
  }
  toggleDropdown() {
    if (!this.dropdownOpen) {
      this.dropdownOpen = true;
    }else{
      this.dropdownOpen = false;}

  }
  formatDate(originalDate: string): string {
    const date = new Date(originalDate);
    
    const day = String(date.getDate()).padStart(2, '0'); // Día
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (0-11)
    const year = date.getFullYear(); // Año
    const hours = String(date.getHours()).padStart(2, '0'); // Horas
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  
  selectOption(reporte: any, event: Event) {
    this.selectedOption = `${this.formatDate(reporte.fecha)} - ${reporte.user.nombre} - ${reporte.producto.producto}` 
    event.stopPropagation();
    this.dropdownOpen = false; 
    
    this.optionSelected.emit(reporte);
  }

}
