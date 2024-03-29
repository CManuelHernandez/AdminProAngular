import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'ProgressBar' },
      },
      {
        path: 'grafica1',
        component: Grafica1Component,
        data: { title: 'Graph' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { title: 'Account-Settings' },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { title: 'Promises' },
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        data: { title: 'Perfil de usuario' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      // Mantenimientos
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { title: 'Mantenimiento de Usuarios' },
      },
      {
        path: 'hospitales',
        component: HospitalesComponent,
        data: { title: 'Mantenimiento de Hospitales' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeagesRoutingModule {}
