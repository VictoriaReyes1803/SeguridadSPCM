import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KraussMaffeiMC6Component } from './Forms/Krauss-maffeiMC6/krauss-maffei-mc6/krauss-maffei-mc6.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
export const routes: Routes = [
   
    {
        path:'',
        component: LoginComponent
    },
   
    {
        path: 'Menu',
        component: MenuComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'Home',
        component: HomeComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'KraussMaffeiMC6',
        component: KraussMaffeiMC6Component,
        canActivate: [AuthGuard] 
    },
  
    {
        path: 'register',
        component: RegisterComponent
    }

];
