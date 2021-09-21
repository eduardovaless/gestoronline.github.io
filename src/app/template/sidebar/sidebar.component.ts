import { DadosEmpresa } from './../dadosempresa';
import { ServiceEmpresaService } from './../../services/service-empresa.service';
import { Component, OnInit } from '@angular/core';



var data = new Date();
var ano = data.getFullYear();


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  dadosempresa: DadosEmpresa;
  anoAtual= ano;
  nomeFantasia = ""
  
  
  constructor(
    private serviceEmpresa: ServiceEmpresaService

  ) {      
    
    
  }

  ngOnInit(): void {
    this.getclinica()
  }

  getclinica(){    
    this.serviceEmpresa.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia);
      }
}
