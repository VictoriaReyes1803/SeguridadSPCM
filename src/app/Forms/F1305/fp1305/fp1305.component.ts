import { Component,HostListener, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolbarComponent } from "../../../toolbar/toolbar.component";
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { ChecklistKraussMaffeiComponent } from '../../Krauss-maffeiMC6/checklist-krauss-maffei/checklist-krauss-maffei.component';
import { KraussMaffeiMc62Component } from "../../Krauss-maffeiMC6/krauss-maffei-mc6-2/krauss-maffei-mc6-2.component";
import { ActivatedRoute } from '@angular/router'; 
import { Producto, Productos , Producto_Maquina} from '../../../Models/Productos';
import { Maquina } from '../../../Models/Maquina';
import { SecureCookieService } from '../../../services/cookies/cookies.service';
import { User } from '../../../Models/user';
import { Header1217Component } from '../../F1217/header-1217/header-1217.component';
import {F1217Service} from '../../../services/Forms/f1217.service';
import { FP1217 } from '../../../Models/Formatos.ts/FP1217';

import { Footer3Component } from '../../Componentes/footer3/footer3.component';
import { Footer2Component } from '../../Componentes/footer2/footer2.component';
import { SpinerComponent } from '../../Componentes/spiner/spiner.component';
import { ProductService } from '../../../services/Productos/product.service';
import { Reporte, Reporteresponse } from '../../../Models/Reporte';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { DigitalOceanService } from '../../../services/digital/digital-ocean.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fp1305',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarComponent,
    SidebarComponent,
    CommonModule,
    Footer3Component,
    SpinerComponent,
    Header1217Component
  ],
  templateUrl: './fp1305.component.html',
  styleUrl: './fp1305.component.css'
})
export class FP1305Component {
  loading = false;
  isOnline: boolean = navigator.onLine;
  currentContainer = 0; 
  is1217!: FP1217;
  ver = false;
  title = 'angular-pdf-export';
  maquina: string | null = null;
  Producto_Maquina: Producto_Maquina | null = null;
  fp1217!: FP1217;
  reporte: Reporteresponse | null = null;
  message = '';
  productos: Productos = [];
  user: User | null = null;
  productoSeleccionado: Producto | null = null;
  productoId:  number | null = null;
  Fecha: string | null = null;
  estado: boolean = false;
  formato: string | null = null;
  reportData: Reporte | null = null;
  report: boolean = false;
  titi: boolean = false;
  
  consumo: number = 0;
  valores!: FP1217;
  pdfurl: string = '';

  checklist = false;
  @ViewChild('container0') container0!: ElementRef;

  pdfSrc: string | null = null;
  isModalOpen = false;
  imagePreviewUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute,
    private secureCookieService: SecureCookieService,
    private F1217Service: F1217Service,
    private sanitizer: DomSanitizer,
    private productService: ProductService,
    private digitalOceanService: DigitalOceanService,
    private router: Router
  ) {
    this.fp1217 = this.F1217Service.getlist();
    // console.log('mc6:', this.mc6)
   
  }
  containers: ElementRef[] = [];
  
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['producto'] && params['maquina']&& params['titi']) {
        this.F1217Service.resetList();
        this.fp1217 = this.F1217Service.getlist();
        this.formato = params['Formato'];
        this.productoSeleccionado = JSON.parse(params['producto']);
        this.Producto_Maquina = JSON.parse(params['producto_maquina']);
        this.maquina = JSON.parse(params['maquina']);
        this.Fecha = params['fecha'];
        this.titi = params['titi'] === 'true';
        this.report = true;
        console.log('reportt:', this.report);
        this.estado = params['estado'] === 'true';
        console.log('estado:', this.estado, typeof this.estado);
        this.user = this.secureCookieService.getSecureCookie('user');
        console.log('Productoo recibido:', this.productoSeleccionado);
        console.log('Maquina recibida:', this.Producto_Maquina);
        console.log('Maquina:', this.maquina);
        this.calcular();

      } else if (params['producto'] && params['report'] ) {
        this.productoSeleccionado = JSON.parse(params['producto']);
        this.Producto_Maquina = JSON.parse(params['producto_maquina']);
        this.maquina = params['maquina'];
        this.formato = params['Formato'];

        const Fechaform = new Date(params['fecha']);

        const options: Intl.DateTimeFormatOptions = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false };

        this.Fecha =  new Intl.DateTimeFormat('es-ES', options).format(Fechaform);

        this.reporte = JSON.parse(params['reporte']);
        this.F1217Service.setlist(this.reporte?.content ?? {});
        this.fp1217 = this.F1217Service.getlist();

        console.log('reporte:', this.reporte);
        this.estado = params['estado'] === 'true';
        console.log('estado:', this.estado, typeof this.estado);
        this.user = this.secureCookieService.getSecureCookie('user');
        console.log('Producto recibido:', this.productoSeleccionado);
        console.log('Maquina recibida:', this.Producto_Maquina);
        console.log('Maquina:', this.maquina);
        this.calcular();
        if (params['ver']){
          this.ver = params['ver'] === 'true';
        }
      }
      else {
        console.log('No se recibió ningún producto.');
      }
      this.valores = this.F1217Service.getlist();
    });
    if (sessionStorage.getItem('mc6')) {
      this.fp1217 = JSON.parse(sessionStorage.getItem('mc6') || '{}');
      this.user = this.secureCookieService.getSecureCookie('user');
      this.calcular();
      console.log('fp1217:', this.fp1217);
    }
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.containers = [this.container0];
      
    });
  }

  @HostListener('window:online', ['$event'])
  onOnline() {
    this.isOnline = true;

    this.is1217 = this.F1217Service.getlist();
    sessionStorage.setItem('fp1217', JSON.stringify(this.is1217));

    console.log('Conectado a internet', this.isOnline);
    
  }

  @HostListener('window:offline', ['$event'])
  onOffline() {
    this.isOnline = false;
    this.fp1217 = sessionStorage.getItem('fp1217') ? JSON.parse(sessionStorage.getItem('fp1217') || '{}') : {};

    console.log('Sin conexión a internet', this.fp1217 );
    
  }

  @HostListener('window:beforeunload', ['$event'])
  handlePageReload(event: BeforeUnloadEvent) {
    this.F1217Service.setlist(this.fp1217);
    
    this.is1217 = this.F1217Service.getlist();
    sessionStorage.setItem('fp1217', JSON.stringify(this.is1217));

    console.log('Página está siendo recargada',this.is1217);
  }


  calcular(): void {
    // this.Volumen_cargaa = ((this.fp1217.carga_s_1 + this.mc6.carga_s_2 + this.mc6.carga_s_mm)/10)*(Math.pow(this.diametro_huisillo/20, 2))*Math.PI;
    // this.T_resistencia = ((this.mc6.Volumen_max / this.Volumen_cargaa) * this.mc6.Tiempo_ciclo_SET * 1.4) / 60;
    
    // this.peso_disparo = this.mc6.Peso_Colada + (this.Peso_pieza_1 * this.mc6.Num_Cav_real_1) + (this.Peso_pieza_2 * this.mc6.Num_Cav_real_2);

    // this.secado_minimo = this.mc6.Tiempo_secado * this.mc6.consumo;

  }
  actualizar(valores: any): void {
  this.fp1217.Arch_Disq = valores.Arch_Disq;
  this.F1217Service.setlist(this.fp1217);
  console.log('fp1217:', this.fp1217);

  }
  recibirValores(valoresActualizados: Partial<FP1217>): void {
    this.F1217Service.setlist(valoresActualizados);
    this.valores = this.F1217Service.getlist(); 
    console.log('Valores actualizados:', this.valores);
  }
  onOptionSelected(reporte: Reporteresponse): void {
    console.log('Reporte seleccionado:', reporte);
    this.message= 'Cargando reporte...';
    this.loading = true;

    this.productService.getReporte(reporte.id).subscribe(
      (data) => {
        console.log('Reporte cargado:', data.content);
        if (this.productoSeleccionado) {
          this.productoSeleccionado.id = data.producto.id;
        }
        if (this.Producto_Maquina) {
          this.Producto_Maquina.id = data.producto_maquina.id;
        }

        let contentParsed;
      try {
       
        if (typeof data.content === 'string') {
          contentParsed = JSON.parse(data.content);
        } else {
          contentParsed = data.content; 
        }
        console.log('Contenido parseado:', contentParsed);
        this.F1217Service.setlist(contentParsed);
        this.fp1217 = this.F1217Service.getlist();

        this.calcular();
      } catch (error) {
        console.error('Error al parsear el contenido del reporte:', error);
      } finally {
        this.loading = false;
      }
      },
      (error) => {
        console.error('Error al cargar el reporte:', error);
      }
    );
    
  }
  
  downloadPDF(guardar: boolean ) {
    this.message= 'Generando PDF, por favor espera ...';
    this.loading = true;
    
    this.F1217Service.setlist(this.fp1217);
    console.log('mc6:', this.fp1217);

    const datosCompletos = this.F1217Service.getlist();
    console.log('Datos completos:', JSON.stringify(datosCompletos));

    const pdf = new jsPDF('p', 'pt', 'letter');
    const marginTop = 10;
    const marginSide = 15;
    const scale = .8;
  
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
  
      Promise.all([
        captureElement(content0),
      ]).then((canvases) => {
        addImageToPDF(canvases[0], true);  
        const pdfBlob = pdf.output('blob');
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;
        const productName = this.productoSeleccionado ? this.productoSeleccionado.producto : 'ProductoDesconocido';
        const userName = this.user ? this.user.id : '0';
         
        
        if (guardar && this.titi)
        {
          const pdfFileName = `F1217_${productName}_${formattedDate}_${formattedTime}_${userName}.pdf`;
          const pdfFile = new File([pdfBlob], pdfFileName, { type: 'application/pdf' });
          const formData = new FormData();
          formData.append('file', pdfFile);

          
          this.digitalOceanService.postpdf(formData).subscribe(
            (data) => {
              this.pdfurl = data.file_url;
              this.message= 'Guardando en base de datos pdf';
              console.log('PDF guardado:', data);

              this.reportData = {
                ruta: this.pdfurl, 
                formato: this.formato ?? '',
                content: JSON.parse(JSON.stringify(this.fp1217)),
                producto_id: this.productoSeleccionado?.id ?? 0, 
                producto_maquina_id: this.Producto_Maquina?.id ?? 0 
            };
              this.productService.postReporte(this.reportData).subscribe(
                (data) => {
                  console.log('Reporte guardado:', data);
                  console.log(this.reportData);
                  this.loading = false;
                  this.router.navigate(['/Menu']);
                  
                },
                (error) => {
                  console.log(this.reportData);
                  console.error('Error al guardar el reporte:', error);
                }
              );

            },
            (error) => {
              console.error('Error al guardar el PDF:', error);
            }
          );
           
          pdf.save(pdfFileName);
        } 
        else if (guardar && !this.titi)
        {
          const pdfFileName = this.reporte?.ruta ? this.reporte.ruta.substring(this.reporte.ruta.lastIndexOf('/') + 1) : '';
          console.log('PDF a actualizar:', pdfFileName);

          const pdfFile = new File([pdfBlob], pdfFileName, { type: 'application/pdf' });
          const formData = new FormData();
          formData.append('file', pdfFile);

          this.digitalOceanService.putpdf(formData).subscribe(
            (data) => {
              console.log('PDF actualizado:', data);
              this.pdfurl = data.file_url;
              console.log('PDF actualizado:', data);

              this.reportData = {
                ruta: this.reporte?.ruta ?? '', 
                formato: this.reporte?.formato ?? '',
                content: JSON.parse(JSON.stringify(this.fp1217)),
                producto_id: this.reporte?.producto?.id ?? 0, 
                producto_maquina_id: this.reporte?.producto_maquina?.id ?? 0,
              
            };
              this.productService.updateReporte(this.reporte?.id ?? 0, this.reportData).subscribe(
                (data) => {
                  console.log('Reporte actualizado:', data);
                  this.loading = false;
                  this.router.navigate(['/Menu']);
                },
                (error) => {
                  console.error('Error al actualizar el reporte:', error);
                }
              );
              pdf.save(pdfFileName);

            },
            (error) => {
              console.error('Error al actualizar el PDF:', error);
            }
          );

         
        }
        else{
        const pdfUrl = URL.createObjectURL(pdfBlob) + "#toolbar=0&navpanes=0&scrollbar=0";
        this.isModalOpen = true;
        this.pdfSrc = pdfUrl;
        this.imagePreviewUrl = this.getSafeUrl(pdfUrl);
        this.loading = false;
        }
        this.currentContainer = originalContainer;
        
        
      
      });
    }, 0);  
  }
  
  openPDFModal(pdfUrl: string) {
    this.imagePreviewUrl = this.getSafeUrl(pdfUrl);
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.imagePreviewUrl = null;
  }
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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

  ngOnDestroy() {
    this.F1217Service.resetList();
    sessionStorage.removeItem('mc6');
  }
}
