// model user
export interface UserLogin{
  
    username : string;
    password: string;
  }

export interface UserRegister{
    email: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    no_empleado: string;
    rol : string;
    username : string;
    password: string;
    profile_picture?: any;
  }
  export interface User{
    id: number;
    email: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    no_empleado: string;
    rol : string;
    username : string;
    is_active: boolean;
    profile_picture?: any;
    }

  export interface LoginResponseInterface {
    refresh: string;
    access: string;
    user: User;
  }