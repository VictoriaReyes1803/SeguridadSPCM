import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/Auth/auth.service';
import { FormsModule } from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserLogin } from '../../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   NgIf,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSubmitting = false;
  backendErrors: any;
  constructor(
  private router : Router,
  private authservice : AuthService,

  ){}

  ngOnInit() {
  
  if (this.authservice.isAuthenticated()) {
      this.router.navigate(['/Menu']);
    }
  }
  login(){
      this.router.navigate(['/Menu'])
  }

  loginForm = new FormGroup({
    // email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
  });

  onSubmit(){
    this.isSubmitting = true;
    const formValues: UserLogin = {
      username: this.loginForm.value.username || '',
      // email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
     
    }
    this.authservice.login(formValues).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/Menu']);
      },
      err => {
        this.isSubmitting = false;
        if (err.message === 'User account is inactive') {
          console.log('La cuenta del usuario está desactivada');
          this.backendErrors = 'Tu cuenta está desactivada. Contacta al administrador.';
        } else
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
