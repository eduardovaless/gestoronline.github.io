import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente/paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';



@NgModule({
  declarations: [PacienteComponent, PacienteFormComponent],

  imports: [
    BrowserAnimationsModule,
    CommonModule,     
    FormsModule,
    MatButtonModule,    
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    PacienteRoutingModule
    
  ],
  exports:[
    PacienteComponent,
    MatTabsModule
    
  ],
  providers:[
    
  ]
})
export class PacienteModule { }