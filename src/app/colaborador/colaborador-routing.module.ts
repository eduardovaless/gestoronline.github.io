import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'colaborador-form', component: ColaboradorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
