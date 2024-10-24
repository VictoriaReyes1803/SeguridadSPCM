import { Component, OnInit} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DigitalOceanService } from '../services/digital/digital-ocean.service';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    SidebarComponent,
    ToolbarComponent,
    CommonModule,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  constructor(private digitalOceanService: DigitalOceanService) { }
  pdfFiles: string[] = [];
  selectedPdf: string | null = null;
  ngOnInit(): void {
  
    this.digitalOceanService.getpdfs().subscribe((data) => {
      this.pdfFiles = data.pdf_files;
    },
    (error) => {
      console.error('Error al obtener los archivos pdf', error);

  });}

  getPdfUrl(pdf: string): string {
    return `https://clayenss.nyc3.digitaloceanspaces.com/${pdf}`;
  }
  openPdfModal(pdf: string): void {
    this.selectedPdf = this.getPdfUrl(pdf);
  }

  closePdfModal(): void {
    this.selectedPdf = null;
  }

}
