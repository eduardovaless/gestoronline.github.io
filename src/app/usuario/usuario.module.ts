import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [UsuarioFormComponent],

  imports: [
    CommonModule,    
    FormsModule,
    MatButtonModule,
    UsuarioRoutingModule
  ],
  exports:[
    UsuarioFormComponent,
    
    
  ],
  providers:[
    
  ]
})
export class UsuarioModule { }