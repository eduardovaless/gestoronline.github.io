import { UsuarioModule } from './usuario/usuario.module';
import { AutorizacaoModule } from './autorizacao/autorizacao.module';
import { ColaboradorModule } from './colaborador/colaborador.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'

import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ColaboradorModule,
    AutorizacaoModule,
    NoopAnimationsModule,
    HttpClientModule,
    UsuarioModule
    
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
