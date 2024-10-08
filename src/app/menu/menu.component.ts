import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../services/Productos/product.service';
import { Producto, Productos } from '../Models/Productos';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  productos: Productos = [];
  productoSeleccionado: Producto | null = null;
  

  constructor(private productService: ProductService,
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
    const selectedId = event.target.value;
    this.productoSeleccionado = this.productos.find(producto => producto.id == selectedId) ?? null;
    console.log('Producto seleccionado:', this.productoSeleccionado); // Verifica que tenga toda la información
  }
  

  crearNuevaHoja(): void {
    if (this.productoSeleccionado) {
      console.log('producto',this.productoSeleccionado);

      this.router.navigate(['/KraussMaffeiMC6'], { 
        queryParams: { 
          producto: JSON.stringify(this.productoSeleccionado) 
        }
      });
    } else {
      alert('Por favor selecciona un producto antes de continuar.');
    }
  }
}
