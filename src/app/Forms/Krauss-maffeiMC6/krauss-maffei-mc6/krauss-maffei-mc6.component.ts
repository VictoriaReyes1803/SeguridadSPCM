import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolbarComponent } from "../../../toolbar/toolbar.component";
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { ChecklistKraussMaffeiComponent } from '../checklist-krauss-maffei/checklist-krauss-maffei.component';
import { KraussMaffeiMc62Component } from "../krauss-maffei-mc6-2/krauss-maffei-mc6-2.component";

@Component({
  selector: 'app-krauss-maffei-mc6',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChecklistKraussMaffeiComponent,
    ToolbarComponent,
    SidebarComponent,
    CommonModule,
    KraussMaffeiMc62Component
],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  title = 'angular-pdf-export';
  
  currentContainer = 0; 
  checklist = false;
  @ViewChild('container0') container0!: ElementRef;
  @ViewChild('container1') container1!: ElementRef;
  @ViewChild('container2') container2!: ElementRef;

  containers: ElementRef[] = [];
  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.containers = [this.container0, this.container1, this.container2];
      
    });
  }
  
  downloadPDF() {
    const pdf = new jsPDF('p', 'pt', 'letter');
    const marginTop = 20;
    const marginSide = 20;
    const scale = 2;
  
    const captureElement = (element: HTMLElement): Promise<HTMLCanvasElement> => {
      return html2canvas(element, {
        scale: scale, 
        width: element.scrollWidth, 
        height: element.scrollHeight
      });
    };
  
    const addImageToPDF = (canvas: HTMLCanvasElement, isFirstPage: boolean) => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth() - marginSide * 2;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width ;
  
      if (!isFirstPage) {
        pdf.addPage();
      }
  
      pdf.addImage(imgData, 'PNG', marginSide, marginTop, pdfWidth, pdfHeight);
    };
  
    const originalContainer = this.currentContainer;  
  
    
    this.currentContainer = -1;
  
    setTimeout(() => {
      const content0: HTMLElement = this.container0.nativeElement;
      const content1: HTMLElement = this.container1.nativeElement;
      const content2: HTMLElement = this.container2.nativeElement;
  
      Promise.all([
        captureElement(content0),
        captureElement(content1),
        captureElement(content2)
      ]).then((canvases) => {
        addImageToPDF(canvases[0], true);  
        addImageToPDF(canvases[1], false);
        addImageToPDF(canvases[2], false); 
  
        pdf.save('SPCM.pdf');
  
        this.currentContainer = originalContainer;
      });
    }, 0);  
  }
  


  prevContainer() {
    if (this.currentContainer > 0) {
      this.currentContainer--;
    }
  }

  nextContainer() {
    if (this.currentContainer < this.containers.length - 1) {
      this.currentContainer++;
    }
  }

  goToContainer(index: number) {
    this.currentContainer = index;
  }

}
