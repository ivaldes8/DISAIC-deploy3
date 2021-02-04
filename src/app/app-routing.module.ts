import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ConsultoriaComponent } from './components/consultoria/consultoria.component';
import { ProdServComponent } from './components/prod-serv/prod-serv.component';
import { EntenamientoComponent } from './components/entenamiento/entenamiento.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { Generic1Component } from './admin/generic1/generic1.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'inicio',
    component:InicioComponent,
  },
  {
    path:'nosotros',
    component:NosotrosComponent,
  },
  {
    path:'consultorias',
    component:ConsultoriaComponent
  },
  {
    path:'prodServ',
    component:ProdServComponent
  },
  {
    path:'entrenamientos',
    component:EntenamientoComponent
  },
  {
    path:'clientes',
    component:ClienteComponent
  },
  {
    path:'contactos',
    component:ContactoComponent
  },
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'admin',
    canActivate: [AuthGuard],
    component: Generic1Component
  },
  {
    path:'**',
    redirectTo: '/inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
