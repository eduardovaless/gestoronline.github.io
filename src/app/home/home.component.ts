import { ServiceEmpresaService } from './../services/service-empresa.service';
import { DadosEmpresa } from './../template/dadosempresa';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clinica: DadosEmpresa;
  nomeFantasia= ""

  constructor(
    private service: ServiceEmpresaService,
  ) { }

  ngOnInit(): void {
    this.getClinica()
  }

  getClinica(){
    this.service.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia)
  }

}
