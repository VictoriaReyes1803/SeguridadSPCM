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

  sidebarVisible: boolean = true;

  constructor(private userService: UserService,
     private secureCookieService: SecureCookieService
    , private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.user = this.secureCookieService.getSecureCookie('user'); 
    console.log(this.user);
  }
  logout()  {
   
    this.authService.logout();
    window.location.href = '/';
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
