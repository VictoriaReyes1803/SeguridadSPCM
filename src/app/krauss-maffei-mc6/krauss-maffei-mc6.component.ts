import { Component } from '@angular/core';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-krauss-maffei-mc6',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './krauss-maffei-mc6.component.html',
  styleUrl: './krauss-maffei-mc6.component.css'
})
export class KraussMaffeiMC6Component {
  form = {
    cliente: '',
    producto1: '',
    numCavTh1: 1,
    maquina: '',
    producto2: '',
    numCavReal1: 1,
    fechaRev: '',
    resina: '',
    fuerzaCierre: 450,
    duracionMaxF: 0.7,
    carreraApertura: 400,
    salidaExpulsor1: 18,
    carreraExpulsor: 55,
    activo: '',
    robot: '',
    comentarios: ''
  };

  saveForm() {
    console.log('Formulario guardado', this.form);
    // Add your logic to save the form data
  }
}
