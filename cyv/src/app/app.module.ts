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
import { PeriodoAfiliacionComponent } from './periodo-afiliacion/periodo-afiliacion.component';
import { EstadoTerrenoComponent } from './estado-terreno/estado-terreno.component';
import { PagoComponent } from './pago/pago.component';
import { TablaDeReferenciasComponent } from './tabla-de-referencias/tabla-de-referencias.component';
import { InteresComponent } from './interes/interes.component';
import { ValorComponent } from './valor/valor.component';
import { EstadoBeneficioComponent } from './estado-beneficio/estado-beneficio.component';
import { SaldadoComponent } from './saldado/saldado.component';
import { PendienteComponent } from './pendiente/pendiente.component';
import { PlanDeCoutasComponent } from './plan-de-coutas/plan-de-coutas.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CuotaComponent } from './cuota/cuota.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// PrimeNG
import {AccordionModule, CalendarModule, MenuItem} from 'primeng/primeng';
import { SharedModule, PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import {DropdownModule} from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TabViewModule} from 'primeng/tabview';
import {MultiSelectModule} from 'primeng/multiselect';



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
    PeriodoAfiliacionComponent,
    EstadoTerrenoComponent,
    PagoComponent,
    TablaDeReferenciasComponent,
    InteresComponent,
    ValorComponent,
    EstadoBeneficioComponent,
    SaldadoComponent,
    PendienteComponent,
    PlanDeCoutasComponent,
    PrestamoComponent,
    SorteoComponent,
    SolicitudPrestamoComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    InicioComponent,
    CuotaComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    SharedModule,
  
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    TabViewModule
  ],
  providers: [
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
