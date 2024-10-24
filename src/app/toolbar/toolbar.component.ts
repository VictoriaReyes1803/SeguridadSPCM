import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms'; 
import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';
import { Reporte, Reporteresponse } from '../Models/Reporte';
import { ProductService } from '../services/Productos/product.service';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';

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
  reportes: Reporteresponse[] = [];
  selectedReporte: Reporte | null = null;

  selectedOption: string | null = null;
  dropdownOpen: boolean = false;

  @Input() report: boolean = false;
  @Output() optionSelected = new EventEmitter<Reporteresponse>();

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
        this.reportes = data; 
        console.log(this.reportes);
        console.log("se logro");
      },
      (error) => {
        console.error('Error al cargar los reportes:', error);
      }
    );
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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
  
  selectOption(reporte: Reporteresponse) {
    this.selectedOption = reporte.fecha; 
    console.log(this.selectedOption);
    this.dropdownOpen = false; 

    this.optionSelected.emit(reporte);
  }

}
