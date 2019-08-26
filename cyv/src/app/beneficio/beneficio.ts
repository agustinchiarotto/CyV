import {  Solicitud } from "../solicitud/solicitud";
import { Socio } from "../socio/socio";
import { Estado_beneficio } from "../estado-beneficio/estado-beneficio";
import {  Garante } from "../garante/garante";

export class Beneficio{
    _id:string;
    numero:string;
    socio:Socio;
    estados:[Estado_beneficio];
    garante:Garante;
}