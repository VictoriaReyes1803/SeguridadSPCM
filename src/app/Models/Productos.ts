export interface Producto {
    id: number;
    producto: string;
    descripcion: string;
    codigo_cliente: string;
    resina_1: string;
    resina_2: string;
    categoria: string;
    estado: boolean;
    }

    export type Productos = Producto[];