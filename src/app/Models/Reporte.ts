export interface Reporte{
    ruta: string;
    producto: number;
    producto_maquina: number;
    content: JSON;
    formato: string;
    
}
export interface Reporteresponse{
    id: number;
    ruta: string;
    producto: number;
    producto_maquina: number;
    content: string;
    fecha: string;
    user: number;

}