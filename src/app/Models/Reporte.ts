export interface Reporte{
    ruta: string;
    producto: number;
    producto_maquina: number;
    content: JSON;
    
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