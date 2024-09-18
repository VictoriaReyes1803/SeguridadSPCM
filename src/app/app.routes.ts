import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KraussMaffeiMC6Component } from './krauss-maffei-mc6/krauss-maffei-mc6.component';
import { FormDinamicComponent } from './form-dinamic/form-dinamic.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'KraussMaffeiMC6',
        component: KraussMaffeiMC6Component
    },
    {
        path: 'FormDinamic',
        component: FormDinamicComponent
    }

];
