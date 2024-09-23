import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolbarComponent } from "../../toolbar/toolbar.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-krauss-maffei-mc6',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarComponent,
    SidebarComponent,
    CommonModule
],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  title = 'angular-pdf-export';
  checklist = false;

  downloadPDF() {
    const content: HTMLElement = document.getElementById('content') as HTMLElement;

    const scale = 2;  // Escalado para garantizar calidad uniforme

  html2canvas(content, {
    scale: scale, // Aumenta la resolución del canvas para mejorar la calidad
    width: content.scrollWidth, // Tamaño fijo de contenido, ignorando el tamaño de la ventana
    height: content.scrollHeight
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'letter');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    const marginTop = 20; 
    pdf.addImage(imgData, 'PNG', 0, marginTop, pdfWidth, pdfHeight);

    pdf.save('tabla.pdf');
  });
  }
  currentContainer = 0; 
  
  nextContainer() {
    if (this.currentContainer < 1) {
      this.currentContainer++;
    }
  }

  prevContainer() {
    if (this.currentContainer > 0) {
      this.currentContainer--;
    }
  }

}
