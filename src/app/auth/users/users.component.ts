import { Component,CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/user';
import { UserService } from '../../services/User/user.service';
import{ Form, FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    FormsModule,
  
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    
    RegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @ViewChild('dt') dt: any;
  searchValue: string = '';

  displayDialog: boolean = false;
  showRegister: false | undefined;
  registerForm: Form | undefined;
  users: User[] = [];
  selectedUser: User = { id: 0, nombre: '', email: '', rol: '', apellido_paterno: '', apellido_materno: '', no_empleado: '', username: '', is_active: false };
  

  ngOnInit(): void {
    this.loadUsers();
  }

  clear(dt: any) {
    dt.filterGlobal('', 'contains'); 
    this.searchValue = '';
  }
  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users || [];
    });
  }


  constructor(private userService: UserService) { }

deleteUser(arg0: any) {
throw new Error('Method not implemented.');
}
editUser(_t31: any) {
throw new Error('Method not implemented.');
}

showDialog(user?: User) {
  this.selectedUser = user ? { ...user } : { id: 0, nombre: '', email: '', rol: '', apellido_paterno: '', apellido_materno: '', no_empleado: '', username: '', is_active: false };
  this.displayDialog = true;
}
filterUsers(event: Event) {
  const input = event.target as HTMLInputElement; 
  this.dt.filterGlobal(input.value, 'contains'); 
}
}
