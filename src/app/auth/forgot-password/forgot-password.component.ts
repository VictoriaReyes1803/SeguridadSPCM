import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/Auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  isSubmitting = false;
  backendErrors: any;
  message = '';
  authError: string | null = null;
  constructor(
    private authservice : AuthService,
    private router : Router,
  ) {}
  PaswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
   
  });
  ngOnInit() {
    
    }

  onSubmit() {
    const formValues = {
      email: this.PaswordForm.value.email || '',
    }
  this.authservice.sendemail(formValues).subscribe(
    (data) => {
      console.log(data);
      this.message = 'Email enviado, checa tu bandeja de entrada';
      Swal.fire({
        icon: 'success',
        title: 'Email enviado!',
        text: 'checa tu bandeja de entrada.',
        timer: 4000,
        showConfirmButton: false
      });

      this.router.navigate(['/']);
    },
    (error) => {
      console.log(error);
      if (error.status === 400)
      {
        this.authError = 'Usuario no encontrado';
      }
      
    });
  }
}
