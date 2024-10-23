import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarComponent } from '../toolbar/toolbar.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ 
    ToolbarComponent,
    DropdownModule,
    CardModule,
    SidebarComponent,
    ButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {



}
