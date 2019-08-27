import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Socio } from './socio';
import { Periodo } from '../periodo-afiliacion/periodo';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.scss'],
  animations: [routerTransition()]
})
export class SocioComponent implements OnInit {

  constructor() { }

  model: any = {};
  socios:Socio[]=new Array();
  cols: any[];
  selectedSocio:Socio;

  ngOnInit() {
    this.getSocios();
    this.cols = [
      { field: 'dni', header: 'DNI' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'fecha_nacimiento', header: 'Fecha Nac' },
      { field: 'domicilio', header: 'Domicilio' },
      { field: 'email', header: 'Email' },
      { field: 'telefono', header: 'Telefono' },
      { field: 'numero_socio', header: 'Num Socio' },
      { field: 'fecha_inicio', header: 'Inicio Periodo' },
      { field: 'fecha_fin', header: 'Fin Periodo' }
    ];
  }


  getSocios(){
   let s:Socio;
   s= new Socio();
   let p:Periodo;
   p= new Periodo();
   
   for(let i =0;i<10;i++){
    s= new Socio();
        s._id=i.toString();
        s.apellido=i.toString();
        s.dni=i.toString();
        s.domicilio=i.toString();
        s.email=i.toString();
        s.nombre=i.toString();
        s.numero_socio=i.toString();
        s.telefono=i.toString();
        s.fecha_nacimiento=new Date();
        p.fecha_fin=new Date();
        p.fecha_inicio=new Date();
        s.periodo_afiliacion=p;

    this.socios.push(s);
   }


  }
}
