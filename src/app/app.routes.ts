import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KraussMaffeiMC6Component } from './Forms/krauss-maffei-mc6/krauss-maffei-mc6.component';
import { LoginComponent } from './login/login.component';
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
        path:'Login',
        component: LoginComponent
    }
];
