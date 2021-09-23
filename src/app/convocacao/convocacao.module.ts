import { ConvocacaoRoutingModule } from './convocacao-routing.module';
import { ConvocacaoFormComponent } from './convocacao-form/convocacao-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ConvocacaoFormComponent],

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
    ConvocacaoRoutingModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
    
    
    
    
  ],
  exports:[
    
    ConvocacaoFormComponent
    
    
  ],
  providers:[
    
  ]
})
export class ConvocacaoModule { }