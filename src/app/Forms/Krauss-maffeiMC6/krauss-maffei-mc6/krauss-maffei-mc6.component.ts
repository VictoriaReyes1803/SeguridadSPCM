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
import { ActivatedRoute } from '@angular/router'; 
import { Producto, Productos , Producto_Maquina} from '../../../Models/Productos';
import { Maquina } from '../../../Models/Maquina';
import { SecureCookieService } from '../../../services/cookies/cookies.service';
import { User } from '../../../Models/user';
import { HeaderMc6Component } from "../header-mc6/header-mc6.component";
import { mc6 } from '../../../Models/Interfaz_mc6.ts/mc6';
import { Mc6Service } from '../../../services/Forms/mc6.service';
import { Footer3Component } from '../../Componentes/footer3/footer3.component';
import { Footer2Component } from '../../Componentes/footer2/footer2.component';
import { SpinerComponent } from '../../Componentes/spiner/spiner.component';
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
    KraussMaffeiMc62Component,
    HeaderMc6Component,
    Footer3Component,
    Footer2Component,
    SpinerComponent
],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  loading = false;

  title = 'angular-pdf-export';
  maquina: Maquina | null = null;
  Producto_Maquina: Producto_Maquina | null = null;
  mc6!: mc6;
  currentContainer = 0; 
  productos: Productos = [];
  user: User | null = null;
  productoSeleccionado: Producto | null = null;
  productoId:  number | null = null;
  Fecha: string | null = null;
  estado: boolean = false;


  checklist = false;
  @ViewChild('container0') container0!: ElementRef;
  @ViewChild('container1') container1!: ElementRef;
  @ViewChild('container2') container2!: ElementRef;

  constructor(private route: ActivatedRoute,
    private secureCookieService: SecureCookieService,
    private mc6Service: Mc6Service
  ) {
    this.mc6 = this.mc6Service.getlist();
    console.log('mc6:', this.mc6);
  }
  containers: ElementRef[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['producto'] && params['maquina']) {
        this.productoSeleccionado = JSON.parse(params['producto']);
        this.Producto_Maquina = JSON.parse(params['producto_maquina']);
        this.maquina = JSON.parse(params['maquina']);
        this.Fecha = params['fecha'];
        this.estado = params['estado'] === 'true';
        console.log('estado:', this.estado, typeof this.estado);
        this.user = this.secureCookieService.getSecureCookie('user');
        console.log('Producto recibido:', this.productoSeleccionado);
        console.log('Maquina recibida:', this.Producto_Maquina);
      } else {
        console.log('No se recibió ningún producto.');
      }
      
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.containers = [this.container0, this.container1, this.container2];
      
    });
  }
  downloadPDF() {
    this.loading = true;
    this.mc6Service.setlist(this.mc6);
    console.log('mc6:', this.mc6);
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
        
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;
        const productName = this.productoSeleccionado ? this.productoSeleccionado.producto : 'ProductoDesconocido';

        const pdfFileName = `MC6_${productName}_${formattedDate}_${formattedTime}.pdf`;
        
        pdf.save(pdfFileName);
  
        this.currentContainer = originalContainer;
        this.loading = false;
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
