import { User } from "./user";
import { Producto } from "./Productos";
import { Producto_Maquina } from "./Productos";

export interface Reporte{
    ruta: string;
    producto: number;
    producto_maquina: number;
    content: JSON;
    formato: string;
    
}
export interface Reporteresponse{
    id: number;
    formato: string;
    producto: Producto;
    producto_maquina: Producto_Maquina;
    content: string;
    fecha: string;
    user: User;
    ruta: string;
}