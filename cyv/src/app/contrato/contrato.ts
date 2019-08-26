import { Escribano } from "../escribano/escribano";

export class Contrato {
        _id:string;
        fecha:Date;
        valor:number;
        montoInicial:number;
        Escribano:Escribano;
}