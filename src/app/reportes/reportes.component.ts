import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DigitalOceanService } from '../services/digital/digital-ocean.service';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ProductService } from '../services/Productos/product.service';
import { Reporte, Reporteresponse } from '../Models/Reporte';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';
import { Mc6Service } from '../services/Forms/mc6.service';
import { mc6 } from '../Models/Formatos.ts/mc6';
import { Router } from '@angular/router';

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
    , private productService: ProductService, public sanitizer: DomSanitizer,
    private secureCookieService: SecureCookieService,
    private mc6Service: Mc6Service,
    private router: Router
  ) { }
  user: User | null = null;
  pdfFiles: string[] = [];
  reportes: Reporteresponse[] = [];
  selectedPdf: string | null = null;
  isModalOpen: boolean = false;
  pdfSrc: SafeResourceUrl | null = null;


  filteredReportes: Reporteresponse[] = [];
  searchUser: string = '';
  searchDate: string = '';
  searchFormat: string = '';
  searchProduct: string = '';
  searchMachine: string = '';

  ngOnInit(): void {
    this.user = this.secureCookieService.getSecureCookie('user');
    console.log(this.user);

    if (this.user?.rol == 'admin') {
      this.productService.getAllReportes().subscribe((data) => {
        this.reportes = data;
        this.filteredReportes = data;
        console.log('reportes', this.reportes);
        this.pdfFiles = data.map(reporte => reporte.ruta);
      },
        (error) => {
          console.error('Error al obtener los archivos pdf', error);

        });
    }
    else {
      this.productService.getReportes().subscribe((data) => {
        this.reportes = data;
        this.filteredReportes = data;
        console.log('reportes', this.reportes);
        this.pdfFiles = data.map(reporte => reporte.ruta);
      },
        (error) => {
          console.error('Error al obtener los archivos pdf', error);

        });
    }
  }

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
      const matchesProduct = reporte.producto.producto.toLowerCase().includes(this.searchProduct.toLowerCase());
      const matchesMachine = reporte.producto_maquina.Cod_maquina.toLowerCase().includes(this.searchMachine.toLowerCase());
      return matchesUser && matchesDate && matchesProduct && matchesMachine;
    });
  }


  deletePdf(id: number, pdfName: string) {
    console.log('id', id, pdfName,);
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar el PDF?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.digitalOceanService.deletepdf(id, pdfName).subscribe(
          (response) => {
            console.log(response);
            this.filteredReportes = this.filteredReportes.filter(reporte => reporte.id !== id);
            Swal.fire({
              icon: 'success',
              title: '¡PDF eliminado!',
              text: 'El PDF se ha eliminado correctamente.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          (error) => {
            console.error('Error al eliminar el PDF:', error);
            alert('No se pudo eliminar el PDF. Inténtalo de nuevo.');
          }
        );
      }
    });
  }
  verenformato(reporte: Reporteresponse, pdfName: string) {

    const reporteSeleccionado = reporte;
   console.log('reporteSeleccionado', reporteSeleccionado);

    const maquina = reporteSeleccionado?.producto_maquina?.Cod_maquina ?? null;
    console.log('maquina', maquina);
     
    
      this.mc6Service.setlist(reporteSeleccionado?.content as mc6);
    if (!reporteSeleccionado.formato || reporteSeleccionado.formato == '') {
      this.router.navigate(['/KraussMaffeiMC6'], {
        queryParams: {
          producto: JSON.stringify(reporteSeleccionado?.producto),
          report: false,
          ver: true,
          reporte: JSON.stringify(reporteSeleccionado),
          maquina: JSON.stringify(maquina),
          producto_maquina: JSON.stringify(reporteSeleccionado?.producto_maquina),
          fecha: reporteSeleccionado?.fecha,
          user: JSON.stringify(reporteSeleccionado?.user),
        }
      
      });
    }else
    {const formato = '/'+reporteSeleccionado.formato;
      this.router.navigate([formato], {
        queryParams: {
          producto: JSON.stringify(reporteSeleccionado?.producto),
          report: false,
          ver: true,
          reporte: JSON.stringify(reporteSeleccionado),
          maquina: JSON.stringify(maquina),
          producto_maquina: JSON.stringify(reporteSeleccionado?.producto_maquina),
          fecha: reporteSeleccionado?.fecha,
          user: JSON.stringify(reporteSeleccionado?.user),
        }
      
      });
    }
    }

  }
