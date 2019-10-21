

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Terreno } from '../terreno/terreno';
import { Loteo } from '../loteo/loteo';


@Component({
  selector: 'app-loteo',
  templateUrl: './loteo.component.html',
  styleUrls: ['./loteo.component.scss'],
  animations: [routerTransition()]

})
export class LoteoComponent implements OnInit {

  constructor() { }


  loteos:Loteo[]=new Array();
  colsL: any[];
  selectedLoteo:Loteo;

  ngOnInit() {
    this.getLoteos();
    this.colsL = [
      { field: 'numero', header: 'Numero' },
      { field: 'ubicacion', header: 'Ubicacion' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'terrenos_disponibles', header: 'Terrenos Disponibles' },
    ];
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

}
