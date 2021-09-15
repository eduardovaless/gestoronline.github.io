import { AsoRoutingModule } from './aso-routing.module';
import { AsoFormComponent } from './aso-form/aso-form.component';
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


@NgModule({
  declarations: [AsoFormComponent],

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
    AsoRoutingModule
    
    
  ],
  exports:[
    
    AsoFormComponent
    
    
  ],
  providers:[
    
  ]
})
export class AsoModule { }