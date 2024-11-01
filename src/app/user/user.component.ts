import { Component,  OnInit } from '@angular/core';
import { UserService } from '../services/User/user.service';
import { User } from '../Models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SecureCookieService } from '../services/cookies/cookies.service';
import Swal from 'sweetalert2';

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

  user: any = {}; 
  passwordVisible = false;

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
    });
    (error: any) => {
      console.log(error);
    }
  }
  async updateUser() {
    if (this.user == null) {
      return;
    }
this.userService.putme(this.user).subscribe(async (data: User) => {
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

}
