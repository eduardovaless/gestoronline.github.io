import { LayoutComponent } from './../layout/layout.component';
import { ConvocacaoFormComponent } from './convocacao-form/convocacao-form.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'convocacao', component: LayoutComponent, children: [
      { path: 'form', component: ConvocacaoFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ConvocacaoRoutingModule { }
