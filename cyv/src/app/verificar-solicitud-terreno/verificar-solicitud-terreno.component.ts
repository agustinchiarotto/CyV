
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Periodo } from '../periodo-afiliacion/periodo';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Socio } from '../socio/socio';
import { Terreno } from '../terreno/terreno';
import { Loteo } from '../loteo/loteo';
import { Garante } from '../garante/garante';
import { Solicitud_Terreno } from '../solicitud-terreno/solicitud-terreno';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { Solicitud } from '../solicitud/solicitud';

@Component({
  selector: 'app-verificar-solicitud-terreno',
  templateUrl: './verificar-solicitud-terreno.component.html',
  styleUrls: ['./verificar-solicitud-terreno.component.css'],
  animations: [routerTransition()]
})
export class VerificarSolicitudTerrenoComponent implements OnInit {

  constructor() { }

  model: any = {};

  solicitudes:Solicitud_Terreno[]=new Array();
  colsS:any[];
  selectedSolicitud:Solicitud_Terreno= new Solicitud_Terreno();
  

  ngOnInit() {

    this.getSolicitudes();
    this.colsS = [
      { field: 'numero', header: 'numero' },
      { field: 'fecha_peticion', header: 'Fecha Peticion' },
      { field: 'fecha_aprobacion_rechazo', header: 'Aprobacion/rechazo' },
      { field: 'resultado', header: 'Resultado' },
      { field: 'numeroSocio', header: 'Numero Socio' },
      { field: 'numeroGarante', header: 'Numero Garante' },
      { field: 'nombreLoteo', header: 'Nombre Loteo' },
    
    ];
  }
  getSolicitudes() {
    let s:Solicitud_Terreno=new Solicitud_Terreno();
    s.numero = 1;;
    s.fecha_peticion = new Date();
    //s.fecha_aprobacion_rechazo = new Date();
    s.resultado = "No evaluado";
    s.numeroSocio = 6;
    s.numeroGarante = 1;
    s.nombreLoteo = "3";
    this.solicitudes.push(s);
  }

  aceptar(){
    Swal.fire({
      title: 'Exito!',
      text: 'Se aprobo la solicitud ',
      type: 'success',
      showConfirmButton: false,
      timer: 3200
    });
    this.selectedSolicitud.resultado="Aprobado";
    this.selectedSolicitud.fecha_aprobacion_rechazo=new Date();
  }
  
  rechazar(){
   
    Swal.fire({
      title: 'Ok!',
      text: 'Se rechazo la solicitud',
      type: 'error',
      showConfirmButton: false,
      timer: 3200
    });
    this.selectedSolicitud.resultado="Rechazado";
    this.selectedSolicitud.fecha_aprobacion_rechazo=new Date();

  }

}
