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
import { ProductService } from '../../../services/Productos/product.service';
import { Reporte, Reporteresponse } from '../../../Models/Reporte';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { DigitalOceanService } from '../../../services/digital/digital-ocean.service';
import { Router } from '@angular/router';

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
    SpinerComponent
],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  loading = false;
  isOnline: boolean = navigator.onLine;
  currentContainer = 0; 
  ismc6!: mc6
  ver = false;
  title = 'angular-pdf-export';
  maquina: string | null = null;
  Producto_Maquina: Producto_Maquina | null = null;
  mc6!: mc6;
  reporte: Reporteresponse | null = null;
  message = '';
  productos: Productos = [];
  user: User | null = null;
  productoSeleccionado: Producto | null = null;
  productoId:  number | null = null;
  Fecha: string | null = null;
  estado: boolean = false;
  
  reportData: Reporte | null = null;
  report: boolean = false;
  titi: boolean = false;
  
  T_resistencia: number = 0;
  Volumen_cargaa: number = 0;
  diametro_huisillo: number = 30;
  
  Peso_pieza_1: number = 15.13;
  Peso_pieza_2: number = 0;
  peso_disparo: number = 0;
  secado_minimo: number = 0;
  consumo: number = 0;
  valores!: mc6
  pdfurl: string = '';

  checklist = false;
  @ViewChild('container0') container0!: ElementRef;
  @ViewChild('container1') container1!: ElementRef;
  @ViewChild('container2') container2!: ElementRef;
  pdfSrc: string | null = null;
  isModalOpen = false;
  imagePreviewUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute,
    private secureCookieService: SecureCookieService,
    private mc6Service: Mc6Service,
    private sanitizer: DomSanitizer,
    private productService: ProductService,
    private digitalOceanService: DigitalOceanService,
    private router: Router
  ) {
    this.mc6 = this.mc6Service.getlist();
    // console.log('mc6:', this.mc6)
   
  }
  containers: ElementRef[] = [];
  
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['producto'] && params['maquina']&& params['titi']) {
        this.mc6Service.resetList();
        this.mc6 = this.mc6Service.getlist();
        
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
        this.mc6Service.setlist(this.reporte?.content ?? {});
        this.mc6 = this.mc6Service.getlist();

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
      this.valores = this.mc6Service.getlist();
    });
    if (sessionStorage.getItem('mc6')) {
      this.mc6 = JSON.parse(sessionStorage.getItem('mc6') || '{}');
      this.user = this.secureCookieService.getSecureCookie('user');
      this.calcular();
      console.log('mc6:', this.mc6);
    }
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.containers = [this.container0, this.container1, this.container2];
      
    });
  }

  @HostListener('window:online', ['$event'])
  onOnline() {
    this.isOnline = true;

    this.ismc6 = this.mc6Service.getlist();
    sessionStorage.setItem('mc6', JSON.stringify(this.ismc6));

    console.log('Conectado a internet', this.isOnline);
    
  }

  @HostListener('window:offline', ['$event'])
  onOffline() {
    this.isOnline = false;
    this.mc6 = sessionStorage.getItem('mc6') ? JSON.parse(sessionStorage.getItem('mc6') || '{}') : {};

    console.log('Sin conexión a internet', this.mc6 );
    
  }

  @HostListener('window:beforeunload', ['$event'])
  handlePageReload(event: BeforeUnloadEvent) {
    this.mc6Service.setlist(this.mc6);
    
    this.ismc6 = this.mc6Service.getlist();
    sessionStorage.setItem('mc6', JSON.stringify(this.ismc6));

    console.log('Página está siendo recargada',this.ismc6);
  }


  calcular(): void {
    this.Volumen_cargaa = ((this.mc6.carga_s_1 + this.mc6.carga_s_2 + this.mc6.carga_s_mm)/10)*(Math.pow(this.diametro_huisillo/20, 2))*Math.PI;
    this.T_resistencia = ((this.mc6.Volumen_max / this.Volumen_cargaa) * this.mc6.Tiempo_ciclo_SET * 1.4) / 60;
    
    this.peso_disparo = this.mc6.Peso_Colada + (this.Peso_pieza_1 * this.mc6.Num_Cav_real_1) + (this.Peso_pieza_2 * this.mc6.Num_Cav_real_2);

    this.secado_minimo = this.mc6.Tiempo_secado * this.mc6.consumo;

  }
  actualizar(valores: any): void {
  this.mc6.Arch_Disq = valores.Arch_Disq;
  this.mc6.Num_Cav_th_2 = valores.Num_Cav_th_2;
  this.mc6.Num_Cav_real_2 = valores.Num_Cav_real_2;
  this.mc6.Producto_2 = valores.Producto_2;
  this.mc6.Pigmento = valores.Pigmento;

  this.mc6Service.setlist(this.mc6);
  console.log('mc6:', this.mc6);

  }
  recibirValores(valoresActualizados: Partial<mc6>): void {
    this.mc6Service.setlist(valoresActualizados);
    this.valores = this.mc6Service.getlist(); 
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
        this.mc6Service.setlist(contentParsed);
        this.mc6 = this.mc6Service.getlist();

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
    
    this.mc6Service.setlist(this.mc6);
    console.log('mc6:', this.mc6);

    const datosCompletos = this.mc6Service.getlist();
    console.log('Datos completos:', JSON.stringify(datosCompletos));

    const pdf = new jsPDF('p', 'pt', 'letter');
    const marginTop = 5;
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

        const pdfBlob = pdf.output('blob');
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;
        const productName = this.productoSeleccionado ? this.productoSeleccionado.producto : 'ProductoDesconocido';
        const userName = this.user ? this.user.id : '0';
         
        
        if (guardar && this.titi)
        {
          const pdfFileName = `MC6_${productName}_${formattedDate}_${formattedTime}_${userName}.pdf`;
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
                formato: 'Krauss_maffei_mc6',
                content: JSON.parse(JSON.stringify(this.mc6)),
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
                content: JSON.parse(JSON.stringify(this.mc6)),
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
    this.mc6Service.resetList();
    sessionStorage.removeItem('mc6');
  }
}
