import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElementFicha {
  nome: string;
  nascimento: string;  
  funcao: string;
  rg: string;
  cpf: string;
}

const ELEMENT_DATAFICHA: PeriodicElementFicha[] = [
  {nome: 'Eduardo Valess', nascimento: '14/03/1996', funcao: 'Analista de Sistema', rg: 'Desenvolvedor', cpf: '067.566.648-89'},
  {nome: 'Benjamim Vales', nascimento: '19/06/2020', funcao: 'Analista de Sistema', rg: 'Desenvolvedor', cpf: '987.951.954-88'}
   
 ];

 @Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  displayedColumnsFicha: string[] = ['nome', 'nascimento', 'funcao', 'rg', 'cpf'];
  dataSourceFicha = ELEMENT_DATAFICHA;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  

}
