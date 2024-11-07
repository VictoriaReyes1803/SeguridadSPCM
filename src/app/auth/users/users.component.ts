import { Component,CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/user';
import { UserService } from '../../services/User/user.service';
import{ Form, FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';

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
  selectedUser: User = { id: 0, nombre: '', email: '', rol: '', apellido_paterno: '', apellido_materno: '', no_empleado: '', username: '', is_active: true, profile_picture: '' };
  

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


  constructor(private userService: UserService) {
    
   }

  deleteUser(user: User) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar a ${user.nombre} ${user.apellido_paterno}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user.id).subscribe({
          next: () => {
            this.loadUsers(); 
            Swal.fire(
              'Eliminado!',
              `El usuario ${user.nombre} ha sido eliminado.`,
              'success'
            );
          },
          error: (error) => {
            Swal.fire(
              'Error!',
              'Hubo un problema al eliminar el usuario.',
              'error'
            );
          }
        });
      }
    });
  }
  

  updateUser() {
    if (this.selectedUser.id) {
      console.log('Usuario a actualizar:', this.selectedUser);
      const { profile_picture, ...userToUpdate } = this.selectedUser;
      this.userService.putUser(this.selectedUser.id, userToUpdate).subscribe(
        {
        next: (updatedUser) => {
          console.log('Usuario actualizado:', updatedUser);
          this.loadUsers(); 
          this.displayDialog = false; 
          Swal.fire(
            'Actualizado!',
            `El usuario ${updatedUser.nombre} ha sido actualizado.`,
            'success'
          );
        },
        error: (error) => {
          Swal.fire(
            'Error!',
            'Hubo un problema al actualizar el usuario.',
            'error'
          );
        }
      });
    }
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
