import { LayoutComponent } from './../layout/layout.component';
import { AutorizacaoFormularioComponent } from './autorizacao-formulario/autorizacao-formulario.component';
import { AutorizacaoFormComponent } from './autorizacao-form/autorizacao-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'autorizacao', component: LayoutComponent, children: [
    { path: 'list', component: AutorizacaoFormComponent},
    { path: 'form', component: AutorizacaoFormularioComponent}
  ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AutorizacaoRoutingModule { }
