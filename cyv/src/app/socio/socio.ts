import { Persona } from '../Persona/persona';
import { Cuota} from "../Couta/couta";
import { Periodo } from "../periodo-afiliacion/periodo"


export class Socio extends Persona{
   
    numero_socio:string;
    cuotas:[Cuota]; 
    periodo_afiliacion:Periodo;


 
}