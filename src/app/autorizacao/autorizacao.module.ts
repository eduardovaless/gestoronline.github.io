
import { AutorizacaoRoutingModule } from './autorizacao-routing.module';
import { AutorizacaoFormComponent } from './autorizacao-form/autorizacao-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { AutorizacaoFormularioComponent } from './autorizacao-formulario/autorizacao-formulario.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AutorizacaoFormComponent, AutorizacaoFormularioComponent],

  imports: [
    BrowserAnimationsModule,
    CommonModule,    
    FormsModule,
    MatButtonModule,
    AutorizacaoRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule
    
    
  ],
  exports:[
    AutorizacaoFormComponent,
    MatTabsModule
    
    
  ],
  providers:[
    
  ]
})
export class AutorizacaoModule { }