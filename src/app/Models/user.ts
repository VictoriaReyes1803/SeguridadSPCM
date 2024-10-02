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
  }
  export interface User{
    email: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    no_empleado: string;
    rol : string;
    username : string;
    }

  export interface LoginResponseInterface {
    refresh: string;
    access: string;
    user: User;
  }