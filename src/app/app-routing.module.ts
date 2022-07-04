import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeagesRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PeagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
