import { User } from "./user";
import { Producto } from "./Productos";
import { Producto_Maquina } from "./Productos";
import { mc6 } from "./Formatos.ts/mc6";
import { km056 } from "./Formatos.ts/km056";

export interface Reporte{
    ruta: string;
    
    producto_id: number;
    producto_maquina_id: number;
    content: JSON;
    formato: string;
    
}
export interface Reporteresponse{
    id: number;
    formato: string;
    producto: Producto;
    producto_maquina: Producto_Maquina;
    content: mc6;
    fecha: string;
    user: User;
    ruta: string;
}
export interface Reporteresponse056{
    id: number;
    formato: string;
    producto: Producto;
    producto_maquina: Producto_Maquina;
    content: km056;
    fecha: string;
    user: User;
    ruta: string;
}