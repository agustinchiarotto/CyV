import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudTerrenoComponent } from './solicitud-terreno/solicitud-terreno.component';
import { LoteoComponent } from './loteo/loteo.component';
import { TerrenoComponent } from './terreno/terreno.component';
import { ContratoComponent } from './contrato/contrato.component';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { VentaComponent } from './venta/venta.component';
import { PersonaComponent } from './persona/persona.component';
import { SocioComponent } from './socio/socio.component';
import { GaranteComponent } from './garante/garante.component';
import { DuenioComponent } from './duenio/duenio.component';
import { EscribanoComponent } from './escribano/escribano.component';
import { ReciboSueldoComponent } from './recibo-sueldo/recibo-sueldo.component';
import { PedidoAfiliacionComponent } from './pedido-afiliacion/pedido-afiliacion.component';
import { PeroidoAfiliacionComponent } from './peroido-afiliacion/peroido-afiliacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    SolicitudTerrenoComponent,
    LoteoComponent,
    TerrenoComponent,
    ContratoComponent,
    BeneficioComponent,
    VentaComponent,
    PersonaComponent,
    SocioComponent,
    GaranteComponent,
    DuenioComponent,
    EscribanoComponent,
    ReciboSueldoComponent,
    PedidoAfiliacionComponent,
    PeroidoAfiliacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
