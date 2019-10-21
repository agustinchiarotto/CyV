import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Periodo } from '../periodo-afiliacion/periodo';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Socio } from '../socio/socio';
import { Terreno } from '../terreno/terreno';
import { Loteo } from '../loteo/loteo';
import { Solicitud_Terreno } from './solicitud-terreno';
import { Garante } from '../garante/garante';

@Component({
  selector: 'app-solicitud-terreno',
  templateUrl: './solicitud-terreno.component.html',
  styleUrls: ['./solicitud-terreno.component.scss'],
  animations: [routerTransition()]

})
export class SolicitudTerrenoComponent implements OnInit {

  constructor() { }

  model: any = {};
  socios:Socio[]=new Array();
  cols: any[];
  selectedSocio:Socio;
  terrenos:Terreno[]=new Array();
  colsT: any[];
  selectedTerreno:Terreno;
  loteos:Loteo[]=new Array();
  colsL: any[];
  selectedLoteo:Loteo;

  solicitudes:Solicitud_Terreno[]=new Array();
  colsS:any[];

  selectedGarante;
  garantes:Garante[]=new Array();
  colsG:any[];

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
    this.getTerrenos();
    this.colsT = [
      { field: 'numero', header: 'Numero' },
      { field: 'largo', header: 'Largo' },
      { field: 'frente', header: 'Frente' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'valor', header: 'Valor' },
      { field: 'matricula', header: 'Matricula' },
    ];
    this.getLoteos();
    this.colsL = [
      { field: 'numero', header: 'Numero' },
      { field: 'ubicacion', header: 'Ubicacion' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'terrenos_disponibles', header: 'Terrenos Disponibles' },
    ];
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
    this.getGarantes();
    this.colsG = [
      { field: 'dni', header: 'DNI' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'domicilio', header: 'Domicilio' },
      { field: 'email', header: 'Email' },
      
    ]

  }
  getGarantes() {

    let g = new Garante();
    g.dni="1";
    g.nombre="juan"
    g.apellido="Perez";
    g.domicilio= "Calle falsa 123";
    g.email="falso@nose.com";

    this.garantes.push(g);

     
  }

  getTerrenos(){
    let t:Terreno;
    t= new Terreno();
 
    
    for(let i =1;i<10;i++){
     t= new Terreno();
         t.numero=i;
         t.largo=i+20;
         t.frente=i+40;
         t.direccion=i.toString();
         t.valor=i*800;
         t.matricula=i.toString();
 
     this.terrenos.push(t);
    }

  }

  getLoteos(){
    let l:Loteo;
    l= new Loteo();
    
    for(let i =1;i<10;i++){
     l= new Loteo();
         l.numero=i;
         l.ubicacion=i.toString();
         l.terrenos_disponibles=i-1;
         l.nombre=i.toString();
         
 
     this.loteos.push(l);
    }
   }


   getSolicitudes(){
    let s:Solicitud_Terreno=new Solicitud_Terreno();
    s.numero = 1;;
    s.fecha_peticion = new Date();
    s.fecha_aprobacion_rechazo = new Date();
    s.resultado = "Aprobado";
    s.numeroSocio = 6;
    s.numeroGarante = 1;
    s.nombreLoteo = "3";
    this.solicitudes.push(s);
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
         s.terreno=false;
 
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
       s.fecha_inicio=new Date("2016-09-02");
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
       s.nombre="ya tengo solicitud"
     }

     if(i==7){
      s.fecha_fin=new Date();
      s.fecha_inicio=new Date("2001-01-16");
      s.nombre="ya tengo terreno";
      s.terreno=true;

    }
 
     this.socios.push(s);
    }
   }


   cargarSolicitudTerreno(f){

    console.log("Cargando solicitud " )
    console.log( this.selectedSocio.fecha_fin );
    console.log(new Date("2018-09-03"));
    console.log(this.selectedSocio.fecha_fin < new Date("2019-09-03"));

    if(this.selectedSocio.fecha_fin < new Date("2019-09-03")){

    
    

     // Muestro un mensajito de error de alta
     Swal.fire({
      title: 'Error!',
      text: 'El socio no se encuentra en un estado de alta',
      type: 'error',
      showConfirmButton: false,
      timer: 3200
    });

    }

    else{


      if( this.selectedSocio.fecha_inicio  > new Date("2018-09-02")){

      
   
        // Muestro un mensajito de error de antiguedad
        Swal.fire({
          title: 'Error!',
          text: 'El socio no cumple con el requerimiento de antiguedad',
          type: 'error',
          showConfirmButton: false,
          timer: 3200
        });
      }

      else{

        if(this.selectedSocio.terreno==true){

       
     
          // Muestro un mensajito de error terreno
          Swal.fire({
            title: 'Error!',
            text: 'El socio ya tiene un terreno ',
            type: 'error',
            showConfirmButton: false,
            timer: 3200
          });
        }

        else{


          if(this.tieneSolicitud()){

       
            // Muestro un mensajito de error solicitud
        Swal.fire({
          title: 'Error!',
          text: 'El socio ya tiene una solicitud pendiente',
          type: 'error',
          showConfirmButton: false,
          timer: 3200
        });
          }

          else {
            if(false){
          // Muestro un mensajito de error beneficio sin cancelar
          Swal.fire({
            title: 'Error!',
            text: 'El socio tiene un beneficio sin cancelar',
            type: 'error',
            showConfirmButton: false,
            timer: 3200
          });
        }

        else{ 

          if(false){ 

            Swal.fire({
              title: 'Error!',
              text: 'El socio es deudor de la afiliacion',
              type: 'error',
              showConfirmButton: false,
              timer: 3200
            });

          }
          else { 

            if(this.selectedGarante.soyGarante){ 
               // Muestro un mensajito de error garante
               Swal.fire({
                title: 'Error!',
                text: 'El garante ya esta cumpliendo esa funcion',
                type: 'error',
                showConfirmButton: false,
                timer: 3200
              });
            }

            else { 
                    // Muestro un mensajito de exito
                    Swal.fire({
                      title: 'Exito!',
                      text: 'La solicitud se registro exitosamente',
                      type: 'success',
                      showConfirmButton: false,
                      timer: 3200
                    });

                  }

                  this.selectedGarante.soyGarante=true;
                  


                  }

                }
              }
            }
          }

    }


        // Reseteo el formulario/modal para que no haya nada en los input cuando se vuelva a abrir
        f.resetForm();
     
   }


   tieneSolicitud(){

    let re = false;
    
    this.solicitudes.forEach(solicitud => {
      if(solicitud.numeroSocio.toString()==this.selectedSocio.numero_socio){
        re=true;
      }
    });

    return re;
   }



}
