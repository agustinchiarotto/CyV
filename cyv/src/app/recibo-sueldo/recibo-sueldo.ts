import { Persona } from '../Persona/persona';

export class Recibo{
    _id: string;
    numero:number;
    sueldo_neto:number;
    sueldo_bruto:number;
    cuil:string;
    persona: Persona;
}