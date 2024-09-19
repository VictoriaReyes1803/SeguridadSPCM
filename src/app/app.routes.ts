import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { KraussMaffeiMC6Component } from './krauss-maffei-mc6/krauss-maffei-mc6.component';
import { FormDinamicComponent } from './form-dinamic/form-dinamic.component';
import { LoginComponent } from './login/login.component';
=======
import { KraussMaffeiMC6Component } from './Forms/krauss-maffei-mc6/krauss-maffei-mc6.component';

>>>>>>> 89e1f6e777046b489f37ad8ce4cfb9022a278248
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'KraussMaffeiMC6',
        component: KraussMaffeiMC6Component
<<<<<<< HEAD
    },
    {
        path: 'FormDinamic',
        component: FormDinamicComponent
    },
    {
        path:'Login',
        component: LoginComponent
=======
>>>>>>> 89e1f6e777046b489f37ad8ce4cfb9022a278248
    }
];
