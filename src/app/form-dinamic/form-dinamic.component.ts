
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../interfaces/form-field.model';


@Component({
  selector: 'app-form-dinamic',
  standalone: true,
  imports: 
  [
    CommonModule
   , ReactiveFormsModule
  ],
  templateUrl: './form-dinamic.component.html',
  styleUrl: './form-dinamic.component.css'
})
export class FormDinamicComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  fields: FormField[] = [
    { type: 'text', label: 'Nombre', name: 'name', value: '' },
    { type: 'email', label: 'Correo', name: 'email', value: '' },
    { type: 'select', label: 'Género', name: 'gender', options: [
      { value: 'male', label: 'Masculino' },
      { value: 'female', label: 'Femenino' }
    ] }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.buildForm();
  }

  buildForm(): void {
    this.fields.forEach(field => {
      if (field.type === 'select') {
        this.form.addControl(field.name, this.fb.control(field.value || '', Validators.required));
      } else {
        this.form.addControl(field.name, this.fb.control(field.value || '', Validators.required));
      }
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
