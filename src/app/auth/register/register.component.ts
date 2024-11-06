import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';
import { UserRegister } from '../../Models/user';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isSubmitting = false;
  backendErrors: any;

  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  constructor(
  private router : Router,
  private authservice : AuthService,

  ){}


  login(){
      this.router.navigate([''])
  }

  registerForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    apellido_materno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido_paterno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    no_empleado: new FormControl('', [Validators.required, Validators.minLength(3)]),
    rol: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
  });

  onSubmit(){
    this.isSubmitting = true;
    const formValues: UserRegister = {
      nombre: this.registerForm.value.nombre || '',
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
      apellido_materno: this.registerForm.value.apellido_materno || '',
      apellido_paterno: this.registerForm.value.apellido_paterno || '',
      no_empleado: this.registerForm.value.no_empleado || '',
      rol: this.registerForm.value.rol || '',
      username: this.registerForm.value.username || ''

      // password_confirmation: this.registerForm.value.passwordConfirm || ''
    }
    this.authservice.register(formValues).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        this.isSubmitting = false;
        if (err.error.errors){
          for (let error in err.error.errors){
            console.log(error)
          }
        }else if (err.status ==500){
          console.log(err)
        }
      }
    )
  }


}
