import { LayoutComponent } from './../layout/layout.component';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'colaborador', component: LayoutComponent, children: [
      { path: 'form', component: ColaboradorFormComponent },
      { path: 'list', component: ColaboradorListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
