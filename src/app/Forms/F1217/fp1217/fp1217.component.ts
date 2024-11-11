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
  selector: 'app-fp1217',
  standalone: true,
  imports: [],
  templateUrl: './fp1217.component.html',
  styleUrl: './fp1217.component.css'
})
export class FP1217Component {

}
