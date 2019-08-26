import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.scss'],
  animations: [routerTransition()]
})
export class SocioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
