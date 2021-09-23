import { LayoutComponent } from './../layout/layout.component';
import { FaturaFormComponent } from './fatura-form/fatura-form.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'fatura', component: LayoutComponent, children: [
      { path: 'form', component: FaturaFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FaturaRoutingModule { }
