import { EmpresaFormComponent } from './empresa-form/empresa-form.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'empresa-form', component: EmpresaFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
