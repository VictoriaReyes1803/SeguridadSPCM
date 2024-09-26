import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { FormsModule } from '@angular/forms';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   NgIf,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 

  constructor(private authService: AuthService) {}
  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password,
    };
    console.log('Data:', credentials);
    this.authService.login(credentials).subscribe(
      response => {
        console.log('Login exitoso', response);
      },
      error => {
        console.error('Error en el login', error, credentials);
      }
    );
  }

}
