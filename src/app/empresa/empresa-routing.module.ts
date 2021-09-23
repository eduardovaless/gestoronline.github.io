import { LayoutComponent } from './../layout/layout.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'empresa', component: LayoutComponent, children: [
      { path: 'form', component: EmpresaFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
