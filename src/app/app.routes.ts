import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KraussMaffeiMC6Component } from './Forms/krauss-maffei-mc6/krauss-maffei-mc6.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './auth/register/register.component';
export const routes: Routes = [
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'KraussMaffeiMC6',
        component: KraussMaffeiMC6Component
    },
  
    {
        path:'',
        component: LoginComponent
    },
   
    {
        path: 'Menu',
        component: MenuComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }

];
