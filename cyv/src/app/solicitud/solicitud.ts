import { Garante } from "../garante/garante";
import { Socio } from "../socio/socio";
import { Recibo } from "../recibo-sueldo/recibo-sueldo";

export class Solicitud{
    _id: string;    
    numero:number;
    fecha_peticion:Date;
    fecha_aprobacion_rechazo:Date;
    resultado:string;
    socio:Socio;
    garante:Garante;
    recibos:[Recibo];
    numeroGarante:number;
    numeroSocio:number;
    nombreLoteo:string;

}