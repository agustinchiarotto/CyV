import { Terreno } from "../terreno/terreno";
import { Duenio } from "../duenio/duenio";

export class Loteo {
    _id: string;
    numero:number;
    ubicacion:string;
    nombre:string;
    terrenos_disponibles:number;
    terrenos:[Terreno];
    duenios:[Duenio];
}