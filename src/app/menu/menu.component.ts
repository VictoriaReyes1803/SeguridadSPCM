import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../services/Productos/product.service';
import { Producto, Productos } from '../Models/Productos';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  productos: Productos = [];


  constructor(private productService: ProductService) { }

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
}
