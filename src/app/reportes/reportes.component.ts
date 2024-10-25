import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DigitalOceanService } from '../services/digital/digital-ocean.service';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ProductService } from '../services/Productos/product.service';
import {Reporte, Reporteresponse} from '../Models/Reporte';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-reportes',
  standalone: true,
 
  imports: [
    SidebarComponent,
    ToolbarComponent,
    CommonModule,
    FormsModule, 
    NgxExtendedPdfViewerModule
  ],
 
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor(private digitalOceanService: DigitalOceanService
    , private productService: ProductService, private sanitizer: DomSanitizer
  ) { }
  pdfFiles: string[] = [];
  reportes: Reporteresponse[] = [];
  selectedPdf: string | null = null;
  isModalOpen: boolean = false;
  pdfSrc: SafeResourceUrl | null = null;


  filteredReportes: Reporteresponse[] = []; 
  searchUser: string = ''; 
  searchDate: string = ''; 
  searchFormat: string = ''; 

  ngOnInit(): void {
  
    this.productService.getAllReportes().subscribe((data) => {
      this.reportes = data;
      this.filteredReportes = data;
      console.log('reportes',this.reportes);
      this.pdfFiles = data.map(reporte => reporte.ruta);
    },
    (error) => {
      console.error('Error al obtener los archivos pdf', error);

  });}

  getPdfUrl(pdf: string): string {
    return `${pdf}`;
  }
  previewPdf(pdf: string): void {
    const pdfUrl = this.getPdfUrl(pdf);
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.pdfSrc = null; 
  }
  getPdfName(pdf: string): string {
    return pdf.substring(pdf.lastIndexOf('/') + 1);
  }
  filterReportes(): void {
    this.filteredReportes = this.reportes.filter(reporte => {
      const matchesUser = reporte.user.nombre.toLowerCase().includes(this.searchUser.toLowerCase());
      const matchesDate = reporte.ruta.includes(this.searchDate);
      const matchesFormat = reporte.formato.includes(this.searchFormat);
      
      return matchesUser && matchesDate && matchesFormat;
    });
  }
}
