import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardUserComponent } from './components/user/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { AdminBasicComponent } from './components/admin/admin-basic/admin-basic.component';
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

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { UserService } from './services/user.service';
import { PositionService } from './services/cargo.service';
import { RolService } from './services/rol.service';
import { FacultadService } from './services/facultad.service';
import { CarreraService } from './services/carrera.service';
import { CienciaService } from './services/ciencia.service';
import { AsignacionService } from './services/asignacion.service';
import { ChatService } from './services/chat.service';
import { DetalleCargoService } from './services/detalle-cargo.service';

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
    AdminBasicComponent
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
    UserService,
    PositionService,
    RolService,
    FacultadService,
    CarreraService,
    CienciaService,
    DetalleCargoService,
    AsignacionService,
    ChatService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    UserAddComponent
  ]
})
export class AppModule { }
