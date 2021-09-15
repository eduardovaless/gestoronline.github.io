import { AutorizacaoFormularioComponent } from './autorizacao-formulario/autorizacao-formulario.component';
import { AutorizacaoFormComponent } from './autorizacao-form/autorizacao-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'autorizacao-form', component: AutorizacaoFormComponent},
  { path: 'autorizacao-formulario', component: AutorizacaoFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AutorizacaoRoutingModule { }
