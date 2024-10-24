<<<<<<< HEAD
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarComponent } from '../toolbar/toolbar.component';

=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../services/Productos/product.service';
import { Producto, Productos, Producto_Maquina } from '../Models/Productos';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { NgSelectComponent } from '@ng-select/ng-select';
import Swal from 'sweetalert2';
import { Maquina } from '../Models/Maquina';
>>>>>>> 881e614f056c670c9002692b205c49f29d5abd59

@Component({
  selector: 'app-menu',
  standalone: true,
<<<<<<< HEAD
  imports: [ 
    ToolbarComponent,
    DropdownModule,
    CardModule,
=======
  imports: [
    CommonModule,
>>>>>>> 881e614f056c670c9002692b205c49f29d5abd59
    SidebarComponent,
    NgSelectComponent,
    ButtonModule,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  productos: Productos = [];
  productoSeleccionado: Producto | null = null;
  productoMaquina: Producto_Maquina | null = null; 
  maquinas: Maquina[] = [];
  fecha: string | null = null; 
  maquinaSeleccionada: Maquina | null = null;

<<<<<<< HEAD


=======
  constructor(private productService: ProductService,
    private maquinaService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productos = data; 
        console.log(this.productos);
      },
      (error) => {
        console.error('Error al cargar los productos', error);
        
        if (error.status === 403) {
          alert('Acceso denegado: No estás autenticado.');
          
        }
      }
    );

  }

  onProductSelect(event: any): void {
    this.productoSeleccionado = event.value; 
    const selectedId = event.target.value;

    this.productoSeleccionado = this.productos.find(producto => producto.id == selectedId) ?? null;
    console.log('Producto seleccionado:', this.productoSeleccionado); 
  }
  

  crearNuevaHoja(): void {
    if (this.productoSeleccionado) {
      this.consultarProductoMaquina(this.productoSeleccionado);
    
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Producto no seleccionado',
        text: 'Por favor selecciona un producto antes de continuar.'
      });
    }
  }

  consultarProductoMaquina(producto: Producto): void {
    console.log('Consultando producto-máquina para:', producto);
    this.productService.getProducto_Maquina(producto.producto).subscribe(
      (data) => {
        this.productoMaquina = data;
        console.log('Producto-Maquina:', this.productoMaquina);
        this.solicitarFechaParaCargarMaquina();
      },
      (error) => {
        console.error('Error al obtener la máquina predeterminada', error);
      }
    );
  }
  

  mostrarModalMaquina(fecha: string): void {
    Swal.fire({
      title: '¿Deseas continuar con la máquina predeterminada?',
      html: `
      <p>La máquina predeterminada es: ${this.productoMaquina?.Centro_trabajo_ppal ?? 'N/A'}</p>
    `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'No, elegir otra máquina',
     
    }).then((result) => {
      if (result.isConfirmed ) {
        this.navegarConMaquina(this.productoMaquina, fecha, true);
      } else {
        this.cargarMaquinas();
  
      }
    });
  }
  private solicitarFechaParaCargarMaquina(): void {
    const fechaActual = new Date().toISOString().split('T')[0];
  
    Swal.fire({
      title: 'Selecciona una fecha para la nueva hoja de parametros',
      html: `
      <label for="fecha">Selecciona una fecha:</label>
      <input type="date" id="fecha" class="swal2-input" value="${fechaActual}" required>
    `,
    icon: 'info',
    confirmButtonText: 'Aceptar',
    preConfirm: () => {
      const fecha = (document.getElementById('fecha') as HTMLInputElement)?.value;
      if (!fecha) {
        Swal.showValidationMessage('Debes seleccionar una fecha');
        return null;
      }
      return { fecha };
    }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Fecha seleccionada para nueva máquina:', result.value.fecha);
        this.fecha = result.value?.fecha;
        if (this.fecha) {
          this.mostrarModalMaquina(this.fecha);
        } else {
          console.error('Fecha is null');
        }
      }
    });
  }
  cargarMaquinas(): void {
    this.maquinaService.getMaquinas().subscribe(
      (data) => {
         this.maquinas = data;
         console.log('Maquinas:', this.maquinas);
        this.mostrarModalSeleccionMaquina();
      },
      (error) => {
        console.error('Error al cargar las máquinas', error);
      }
    );
  }

  mostrarModalSeleccionMaquina(): void {
    Swal.fire({
      title: 'Selecciona una máquina',
      input: 'select',
      inputOptions: this.maquinas.reduce((options: { [key: string]: string }, maquina) => {
        options[maquina.id] = maquina.maquina;
        return options;
      }, {}),
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            this.maquinaSeleccionada = this.maquinas.find(m => m.id === parseInt(value)) ?? null;
            resolve('');
          } else {
            resolve('Debes seleccionar una máquina');
          }
        });
      }
    }).then((result) => {
      if (result.isConfirmed && this.maquinaSeleccionada) {
        this.navegarConMaquina(this.maquinaSeleccionada, this.fecha ?? '', false);
      }
    });
  }

  navegarConMaquina(maquina: any, fechaSeleccionada: string, estado: boolean): void {
    this.router.navigate(['/KraussMaffeiMC6'], { 
      queryParams: { 
        producto: JSON.stringify(this.productoSeleccionado),
        maquina: JSON.stringify(maquina),
        producto_maquina : JSON.stringify(this.productoMaquina),
        fecha : fechaSeleccionada,
        estado : estado
      }
    });
  }
>>>>>>> 881e614f056c670c9002692b205c49f29d5abd59
}
