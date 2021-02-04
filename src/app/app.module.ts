import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { GenericService1 } from './services/generic1.service';
import { Generic2Service } from './services/generic2.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConsultoriaComponent } from './components/consultoria/consultoria.component';
import { ProdServComponent } from './components/prod-serv/prod-serv.component';
import { EntenamientoComponent } from './components/entenamiento/entenamiento.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContratoServComponent } from './components/prod-serv/contrato-serv/contrato-serv.component';
import { AuthComponent } from './auth/auth.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { Generic1Component } from './admin/generic1/generic1.component';
import { AddGeneric1Component } from './admin/generic1/add-generic1/add-generic1.component';
import { DeleteGeneric1Component } from './admin/generic1/delete-generic1/delete-generic1.component';
import { EditGeneric1Component } from './admin/generic1/edit-generic1/edit-generic1.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ConsultoriaComponent,
    ProdServComponent,
    EntenamientoComponent,
    ContactoComponent,
    ClienteComponent,
    ContratoServComponent,
    AuthComponent,
    Generic1Component,
    AddGeneric1Component,
    DeleteGeneric1Component,
    EditGeneric1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BsModalService,
    GenericService1,
    Generic2Service,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  entryComponents: [
    ProdServComponent,
    AddGeneric1Component,
    EditGeneric1Component,
    DeleteGeneric1Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
