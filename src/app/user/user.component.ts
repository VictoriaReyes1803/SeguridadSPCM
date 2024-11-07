import { Component,  OnInit } from '@angular/core';
import { UserService } from '../services/User/user.service';
import { User } from '../Models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SecureCookieService } from '../services/cookies/cookies.service';
import Swal from 'sweetalert2';
import { urll } from '../../Enviroments/enviroment';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SidebarComponent
],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  apiurl = urll;
  user: any = {}; 
  passwordVisible = false;
  profilePicture: File | null = null;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(private userService: UserService,
    private secureCookieService: SecureCookieService
  ) { }
  ngOnInit() {
    this.userService.getme().subscribe((data: User) => {
      this.user = data;
      console.log(this.user);
      if (this.user.profile_picture) {
        this.user.profile_picture = this.apiurl+ this.user.profile_picture;
      }
    });
    (error: any) => {
      console.log(error);
    }
  }
  async updateUser() {
    if (this.user == null) {
      return;
    }
    const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('nombre', this.user.nombre);
    formData.append('apellido_paterno', this.user.apellido_paterno);
    formData.append('apellido_materno', this.user.apellido_materno);
    formData.append('no_empleado', this.user.no_empleado);
    formData.append('email', this.user.email);
    formData.append('rol', this.user.rol);
    formData.append('password', this.user.password);
    
    if (this.profilePicture) {
      formData.append('profile_picture', this.profilePicture, this.profilePicture.name);
    }

  this.userService.putme(formData).subscribe(async (data: User) => {
    this.user = data;
    console.log(this.user);

  this.secureCookieService.setSecureCookie('user', this.user);

  await Swal.fire({
    icon: 'success',
    title: 'User Updated',
    showConfirmButton: false,
    timer: 1500
  });

  window.location.reload();
},
(error: any) => {
  console.log(error);
});
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profile_picture = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
