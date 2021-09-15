import { ColaboradorRoutingModule } from './colaborador-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ColaboradorFormComponent],

  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    FormsModule,
    MatButtonModule
    
  ],
  exports:[
    ColaboradorFormComponent,
    
    
  ],
  providers:[
    
  ]
})
export class ColaboradorModule { }