import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardUserComponent } from './components/user/dashboard-user/dashboard-user.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserAddComponent } from './components/admin/user-add/user-add.component';
import { FacultadComponent } from './components/admin/facultad/facultad.component';
import { FacultadAddComponent } from './components/admin/facultad-add/facultad-add.component';
import { CarreraComponent } from './components/admin/carrera/carrera.component';
import { CarreraAddComponent } from './components/admin/carrera-add/carrera-add.component';
import { CargoComponent } from './components/admin/cargo/cargo.component';
import { CargoAddComponent } from './components/admin/cargo-add/cargo-add.component';

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
      // {
      //   path: 'user/add',
      //   component: UserAddComponent,
      //   outlet: 'admin'
      // },
      // {
      //   path: 'user/edit:id',
      //   component: UserAddComponent,
      //   outlet: 'admin'
      // },
      {
        path: 'facultad',
        component: FacultadComponent,
        outlet: 'admin'
      },
      {
        path: 'facultad/add',
        component: FacultadAddComponent,
        outlet: 'admin'
      },
      {
        path: 'carrera',
        component: CarreraComponent,
        outlet: 'admin'
      },
      {
        path: 'carrera/add',
        component: CarreraAddComponent,
        outlet: 'admin'
      },
      {
        path: 'cargo',
        component: CargoComponent,
        outlet: 'admin'
      },
      {
        path: 'cargo/add',
        component: CargoAddComponent,
        outlet: 'admin'
      }
    ]
  },
  {
    path: 'usuario',
    component: DashboardUserComponent
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
