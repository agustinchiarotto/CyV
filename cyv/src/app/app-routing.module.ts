import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioComponent } from './socio/socio.component';
import { TerrenoComponent } from './terreno/terreno.component';
import { SolicitudTerrenoComponent } from './solicitud-terreno/solicitud-terreno.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
  // REDIRECCIONAMIENTO A INICIO
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  // RUTAS A COMPONENTES
  { path: 'inicio', component: InicioComponent},
  { path: 'socios', component: SocioComponent},
  { path: 'terrenos', component: TerrenoComponent},
  { path: 'solicitud-terreno', component: SolicitudTerrenoComponent},
 // { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
