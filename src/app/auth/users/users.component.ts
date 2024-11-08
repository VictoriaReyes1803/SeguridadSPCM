import { Component,CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../Models/user';
import { UserService } from '../../services/User/user.service';
import{ Form, FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';
import { urll } from '../../../Enviroments/enviroment';
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @ViewChild('dt') dt: any;
  searchValue: string = '';
  profilePicture: File | null = null;
  displayDialog: boolean = false;
  showRegister: false | undefined;
  registerForm: Form | undefined;
  users: User[] = [];
  apiurl = urll;
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
      this.users.forEach(user => {
        if (user.profile_picture) {
            user.profile_picture = this.apiurl + user.profile_picture;
        }
    });

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
      const formData = new FormData();
      formData.append('username', this.selectedUser.username);
      formData.append('nombre', this.selectedUser.nombre);
      formData.append('apellido_paterno', this.selectedUser.apellido_paterno);
      formData.append('apellido_materno', this.selectedUser.apellido_materno);
      formData.append('no_empleado', this.selectedUser.no_empleado);
      formData.append('email', this.selectedUser.email);
      formData.append('rol', this.selectedUser.rol);
      
      if (this.profilePicture) {
        formData.append('profile_picture', this.profilePicture, this.profilePicture.name);
      }
      this.userService.putUser(this.selectedUser.id, formData).subscribe(
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
    this.selectedUser = user ? { ...user } : { id: 0, nombre: '', email: '', rol: '', apellido_paterno: '', apellido_materno: '', no_empleado: '', username: '', is_active: true, profile_picture: '' };
    this.displayDialog = true; 
  }
  
filterUsers(event: Event) {
  const input = event.target as HTMLInputElement; 
  this.dt.filterGlobal(input.value, 'contains'); 
}
onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.profilePicture = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedUser.profile_picture = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
}
