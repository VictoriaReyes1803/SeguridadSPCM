import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KraussMaffeiMC6Component } from './Forms/Krauss-maffeiMC6/krauss-maffei-mc6/krauss-maffei-mc6.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './Guards/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './auth/users/users.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserRoleGuard } from './Guards/reportes.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';

import { registerGuard } from './Guards/register.guard';

export const routes: Routes = [
   
    {
        path:'',
        component: LoginComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
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
        component: RegisterComponent,
        canActivate: [AuthGuard, registerGuard]
    },
    {   path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard, UserRoleGuard],
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**', 
        component: NotFoundComponent
    }

];
