import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ColaboradorRoutingModule } from './colaborador-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import {MatButtonModule} from '@angular/material/button';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';


@NgModule({
  declarations: [ColaboradorFormComponent, ColaboradorListComponent],

  imports: [
    BrowserAnimationsModule,
    CommonModule, 
    ColaboradorRoutingModule,   
    FormsModule,
    MatButtonModule,    
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    
    
  ],
  exports:[
    ColaboradorFormComponent,
    MatTabsModule
    
  ],
  providers:[
    
  ]
})
export class ColaboradorModule { }