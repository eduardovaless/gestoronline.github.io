import { DadosEmpresa } from './../../template/dadosempresa';
import { ServiceEmpresaService } from './../../services/service-empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string ;
  password: string ;
  loginError: boolean;
  clinica: DadosEmpresa;
  nomeFantasia= ""

  constructor(
    private router: Router,
    private service: ServiceEmpresaService
  ) { }

  ngOnInit(): void {
    this.getClinica()
  }

  onSubmit() {

    this.router.navigate(['/home/home'])
   
  }

  getClinica(){
    this.service.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia)
  }
  
}
