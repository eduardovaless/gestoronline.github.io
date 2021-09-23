import { AuthService } from './login/auth.service';
import { AuthGuardService } from './login/auth-guard.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snackbar.service';
import { PacienteModule } from './paciente/paciente.module';
import { AgendaModule } from './agenda/agenda.module';
import { ServiceEmpresaService } from './services/service-empresa.service';

import { FormsModule } from '@angular/forms';

import { UsuarioModule } from './usuario/usuario.module';


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
    NoopAnimationsModule,
    HttpClientModule,
    UsuarioModule,
    FormsModule,
    AgendaModule,
    PacienteModule,
    MatSnackBarModule
    
  ],
  providers: [   
    ServiceEmpresaService,
    SnackBarService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
