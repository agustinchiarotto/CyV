import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Socio } from './socio';
import { Periodo } from '../periodo-afiliacion/periodo';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Solicitud_Terreno } from '../solicitud-terreno/solicitud-terreno';

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
        s.fecha_fin=new Date();
        s.fecha_inicio=new Date();
        p.fecha_fin=new Date();
        p.fecha_inicio=new Date();
        s.periodo_afiliacion=p;

    if(i==2){
      s.fecha_fin=new Date("2019-01-16");
      s.fecha_inicio=new Date(1);
      s.nombre="socio vencido"
    }

    if(i==3){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2019-01-16");
      s.nombre="sin anio"
    }

    if(i==4){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2001-01-16");
      s.nombre="disponible"
    }
    if(i==5){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2001-01-16");
      s.nombre="disponible sin garante"
    }
    if(i==6){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2001-01-16");
      s.nombre="ya tengo terreno"
    }

    if(i==6){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2001-01-16");
      s.nombre="ya tengo solicitud"
    }

    this.socios.push(s);
   }
  }

  // ***************
  // *** AGREGAR ***
  // ***************
  cargarSocio(f: NgForm) {
   
    let socioAgregado:Socio = new Socio();
    let p:Periodo = new Periodo();
    socioAgregado._id=this.model._id;
    socioAgregado.apellido=this.model.apelldio;
    socioAgregado.dni=this.model.dni;
    socioAgregado.domicilio=this.model.domicilio;
    socioAgregado.email=this.model.email;
    socioAgregado.nombre=this.model.nombre;
    socioAgregado.numero_socio=this.model.numero_socio;
    socioAgregado.telefono=this.model.telefono;
    socioAgregado.fecha_nacimiento=new Date();
    p.fecha_fin=new Date();
    p.fecha_inicio=new Date();
    socioAgregado.periodo_afiliacion=p;

        // Muestro un mensajito de Agregado con Éxito
        Swal.fire({
          title: 'Agregado!',
          text: 'Se ha creado el socio correctamente.',
          type: 'success',
          showConfirmButton: false,
          timer: 1200
        });

        // Agrego el Médico al Arreglo de Médicos (actualiza la tabla)
        this.socios.push(socioAgregado);

        // Reseteo el formulario/modal para que no haya nada en los input cuando se vuelva a abrir
        f.resetForm();
  
  }
}

