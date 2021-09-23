import { LayoutComponent } from './../layout/layout.component';
import { AsoFormComponent } from './aso-form/aso-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'aso', component: LayoutComponent, children: [
    { path: 'form', component: AsoFormComponent}

  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AsoRoutingModule { }
