import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

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
  declarations: [EmpresaFormComponent],

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
    EmpresaRoutingModule
    
    
    
  ],
  exports:[
    
    EmpresaFormComponent
    
    
  ],
  providers:[
    
  ]
})
export class EmpresaModule { }