import { Estado_terreno } from "../estado-terreno/estado-terreno";

export class Terreno{
    _id: string;
    numero:number;
    largo:number;
    frente:number;
    direccion:string;
    valor:number;
    matricula:string;
    estado:Estado_terreno;

}