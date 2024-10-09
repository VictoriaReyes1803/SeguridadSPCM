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
export interface Producto_Maquina
{
    id: number;
    Ruta: string;
    Descripcion: string;
    Categoria: string;
    Operacion: number;
    Subcontratacion: string;
    Centro_trabajo_ppal: string;
    Destino_ope: string;
    Cod_maquina: string;
    Tipo_tpo_operacional: string;
    Tiempo_ajuste: number;
    Tpo_operacional: number;
    Cadencia: number;
    Cadence_theo: number;
    Utillaje: string;
    Eficiencia: number;
}
    export type Productos = Producto[];