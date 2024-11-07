import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { User } from '../Models/user';
import { AuthService } from '../services/Auth/auth.service';
import { SecureCookieService } from '../services/cookies/cookies.service';
import { UserService } from '../services/User/user.service';
import { catchError, tap, throwError } from 'rxjs';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';
import {urll} from '../../Enviroments/enviroment';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    AvatarModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  user: User | null = null;
  apiURL = urll;
  

  sidebarVisible: boolean = true;

  constructor(private userService: UserService,
     private secureCookieService: SecureCookieService
    , private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.userService.getme().subscribe((data: User) => {
      this.user = data;
      console.log(this.user);
      if (this.user.profile_picture) {
        this.user.profile_picture = this.apiURL+ this.user.profile_picture;
      }
    });
    (error: any) => {
      console.log(error);
    }

    console.log(this.user);
    console.log(this.user?.profile_picture);
  }
  logout()  {
   
    this.authService.logout();
    window.location.href = '/';
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  navigateToUser() {
    this.router.navigate(['/user']);
  }
}
