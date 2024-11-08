import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';
import { UserRegister } from '../../Models/user';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import Swal from 'sweetalert2';

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
  profilePicture: File | null = null;
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
    profilePicture: new FormControl<string | null>(null)
  });

  onSubmit(){
    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('nombre', this.registerForm.value.nombre || '');
    formData.append('email', this.registerForm.value.email || '');
    formData.append('password', this.registerForm.value.password || '');
    formData.append('apellido_materno', this.registerForm.value.apellido_materno || '');
    formData.append('apellido_paterno', this.registerForm.value.apellido_paterno || '');
    formData.append('no_empleado', this.registerForm.value.no_empleado || '');
    formData.append('rol', this.registerForm.value.rol || '');
    formData.append('username', this.registerForm.value.username || '');

    if (this.profilePicture) {
      formData.append('profile_picture', this.profilePicture, this.profilePicture.name);
    }

    this.authservice.register(formData).subscribe(
      data => {
        Swal.fire('Usuario registrado', 'Usuario registrado correctamente', 'success');
        
        this.router.navigate(['users']);
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
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.registerForm.patchValue({ profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

}
