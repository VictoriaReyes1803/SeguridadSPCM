import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolbarComponent } from "../../toolbar/toolbar.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";

@Component({
  selector: 'app-krauss-maffei-mc6',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarComponent,
    SidebarComponent
],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  title = 'angular-pdf-export';

  downloadPDF() {
    const content: HTMLElement = document.getElementById('content') as HTMLElement;

  html2canvas(content, {
    width: content.scrollWidth, 
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

}
