import { Terreno } from "../terreno/terreno";
import { Contrato } from "../contrato/contrato";
import { Beneficio } from '../beneficio/beneficio';

export class Venta extends Beneficio{
    pagoInicial:number;
    terreno:Terreno;
    contrato:Contrato;
    
}