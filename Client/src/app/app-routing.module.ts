import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardUserComponent } from './components/user/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/admin/user/user.component';
import { FacultadComponent } from './components/admin/facultad/facultad.component';
import { CarreraComponent } from './components/admin/carrera/carrera.component';
import { CargoComponent } from './components/admin/cargo/cargo.component';
import { CienciaComponent } from './components/admin/ciencia/ciencia.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { TemaComponent } from './components/user/tema/tema.component';
import { HistoriaComponent } from './components/user/historia/historia.component';
import { ExamenComponent } from './components/user/examen/examen.component';
import { SalaComponent } from './components/user/sala/sala.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'administrador',
    component: DashboardAdminComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        outlet: 'admin'
      },
      {
        path: 'facultad',
        component: FacultadComponent,
        outlet: 'admin'
      },
      {
        path: 'carrera',
        component: CarreraComponent,
        outlet: 'admin'
      },
      {
        path: 'cargo',
        component: CargoComponent,
        outlet: 'admin'
      },
      {
        path: 'ciencia',
        component: CienciaComponent,
        outlet: 'admin'
      }
    ]
  },
  {
    path: 'usuario',
    component: DashboardUserComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
        outlet: 'user'
      },
      {
        path: 'tema',
        component: TemaComponent,
        outlet: 'user'
      },
      {
        path: 'historia',
        component: HistoriaComponent,
        outlet: 'user'
      },
      {
        path: 'examen',
        component: ExamenComponent,
        outlet: 'user'
      },
      {
        path: 'sala',
        component: SalaComponent,
        outlet: 'user'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
