import { FormsModule } from '@angular/forms';
import { FaturaModule } from './fatura/fatura.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ConvocacaoModule } from './convocacao/convocacao.module';
import { AsoModule } from './aso/aso.module';
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
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './layout/layout.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    
    
    
 
 
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ColaboradorModule,
    AutorizacaoModule,
    NoopAnimationsModule,
    HttpClientModule,
    UsuarioModule,
    AsoModule,
    ConvocacaoModule,
    EmpresaModule,
    FaturaModule,
    FormsModule
    
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
