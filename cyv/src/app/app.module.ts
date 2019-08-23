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
import { PeriodoAfiliacionComponent } from './periodo-afiliacion/periodo-afiliacion.component';
import { CoutaComponent } from './couta/couta.component';
import { EstadoTerrenoComponent } from './estado-terreno/estado-terreno.component';
import { PagoComponent } from './pago/pago.component';
import { TablaDeReferenciasComponent } from './tabla-de-referencias/tabla-de-referencias.component';
import { InteresComponent } from './interes/interes.component';
import { ValorComponent } from './valor/valor.component';
import { EstadoBeneficioComponent } from './estado-beneficio/estado-beneficio.component';
import { SaldadoComponent } from './saldado/saldado.component';
import { PendienteComponent } from './pendiente/pendiente.component';
import { PlanDeCoutasComponent } from './plan-de-coutas/plan-de-coutas.component';

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
    PeroidoAfiliacionComponent,
    PeriodoAfiliacionComponent,
    CoutaComponent,
    EstadoTerrenoComponent,
    PagoComponent,
    TablaDeReferenciasComponent,
    InteresComponent,
    ValorComponent,
    EstadoBeneficioComponent,
    SaldadoComponent,
    PendienteComponent,
    PlanDeCoutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
