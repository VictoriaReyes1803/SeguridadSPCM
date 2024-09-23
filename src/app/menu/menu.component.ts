import { Component } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
  
    SidebarComponent,
    ButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
