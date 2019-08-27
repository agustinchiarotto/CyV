import { Persona } from '../persona/persona';
import { Cuota} from "../cuota/cuota";
import { Periodo } from "../periodo-afiliacion/periodo"


export class Socio extends Persona{
   
    numero_socio:string;
    cuotas:[Cuota]; 
    periodo_afiliacion:Periodo;


 
}