import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { SecureCookieService } from '../services/cookies/cookies.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  user : User | null = null;
  constructor(
    private cookieService: SecureCookieService
  ) { }
  ngOnInit() {
   
   this.user = this.cookieService.getSecureCookie('user');
   console.log(this.user);

  }


}
