import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardUserComponent } from './components/user/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { UserCargoComponent  } from './components/admin/user-cargo/user-cargo.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { FacultadComponent } from './components/admin/facultad/facultad.component';
import { FacultadAddComponent } from './components/admin/facultad-add/facultad-add.component';
import { CarreraComponent } from './components/admin/carrera/carrera.component';
import { CarreraAddComponent } from './components/admin/carrera-add/carrera-add.component';
import { CargoComponent } from './components/admin/cargo/cargo.component';
import { CargoAddComponent } from './components/admin/cargo-add/cargo-add.component';
import { CienciaComponent } from './components/admin/ciencia/ciencia.component';
import { CienciaAddComponent } from './components/admin/ciencia-add/ciencia-add.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { TemaComponent } from './components/user/tema/tema.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { UserService } from './services/user.service';
import { CargoService } from './services/cargo.service';
import { RolService } from './services/rol.service';
import { FacultadService } from './services/facultad.service';
import { CarreraService } from './services/carrera.service';
import { CienciaService } from './services/ciencia.service';
import { AsignacionService } from './services/asignacion.service';
import { ChatService } from './services/chat.service';
import { DetalleCargoService } from './services/detalle-cargo.service';
import { TemaService } from './services/tema.service';
import { SrcTemaService } from './services/src-tema.service';
import { EtiquetaService } from './services/etiqueta.service';
import { ComentarioService } from './services/comentario.service';
import { ExamenService } from './services/examen.service';
import { PreguntaService } from './services/pregunta.service';
import { TipoPreguntaService } from './services/tipo-pregunta.service';
import { DetallePreguntaService } from './services/detalle-pregunta.service';
import { RespuestaService } from './services/respuesta.service';
import { DetalleRespuestaService } from './services/detalle-respuesta.service';
import { HistoriaComponent } from './components/user/historia/historia.component';
import { ExamenComponent } from './components/user/examen/examen.component';
import { SalaComponent } from './components/user/sala/sala.component';
import { AddTemaComponent } from './components/user/add-tema/add-tema.component';
import { PickDetalleCargoComponent } from './components/modal/pick-detalle-cargo/pick-detalle-cargo.component';
import { EtiquetaComponent } from './components/user/etiqueta/etiqueta.component';
import { ComentarioComponent } from './components/user/comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardUserComponent,
    DashboardAdminComponent,
    SigninComponent,
    NotFoundComponent,
    UserComponent,
    UserAddComponent,
    FacultadComponent,
    FacultadAddComponent,
    CarreraComponent,
    CarreraAddComponent,
    CargoComponent,
    CargoAddComponent,
    UserCargoComponent,
    CienciaComponent,
    CienciaAddComponent,
    PerfilComponent,
    TemaComponent,
    HistoriaComponent,
    ExamenComponent,
    SalaComponent,
    AddTemaComponent,
    PickDetalleCargoComponent,
    EtiquetaComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    CargoService,
    RolService,
    UserService,
    FacultadService,
    CarreraService,
    CienciaService,
    ChatService,
    DetalleCargoService,
    AsignacionService,
    TemaService,
    SrcTemaService,
    EtiquetaService,
    ComentarioService,
    ExamenService,
    PreguntaService,
    TipoPreguntaService,
    DetallePreguntaService,
    RespuestaService,
    DetalleRespuestaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserAddComponent,
    UserCargoComponent,
    FacultadAddComponent,
    CarreraAddComponent,
    CargoAddComponent,
    CienciaAddComponent, 
    AddTemaComponent,
    PickDetalleCargoComponent,
    EtiquetaComponent, 
    ComentarioComponent
  ]
})
export class AppModule { }
