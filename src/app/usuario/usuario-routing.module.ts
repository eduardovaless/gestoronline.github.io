import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: UsuarioFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
