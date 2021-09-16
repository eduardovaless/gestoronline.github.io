import { Component, OnInit } from '@angular/core';
//AREA
interface Area {
  value: string;
  viewValue: string;
}

//FUNÇÃO
interface Funcao {
  value: string;
  viewValue: string;
}

//TABELA
export interface PeriodicElement {
  colaborador: string;
  area: string;
  funcao: string;
  tiporisco: string;
  risco: string;
  periodico: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { colaborador: 'Eduardo Vales', area: 'Desenvolvimento', funcao: 'Analista de Sistemas', tiporisco: 'Ergonomico', risco: 'Postura Inadequada', periodico: '12 meses' },
  { colaborador: 'Benjamim Estrela Vales Santos', area: 'Suporte', funcao: 'Suporte Tecnico', tiporisco: 'Ergonomico', risco: 'Postura Inadequada', periodico: '12 meses' }

];

@Component({
  selector: 'app-convocacao-form',
  templateUrl: './convocacao-form.component.html',
  styleUrls: ['./convocacao-form.component.css']
})
export class ConvocacaoFormComponent implements OnInit {

  //AREA
  areas: Area[] = [
    
    {value: 'des-1', viewValue: 'Desenvolvimento'},
    {value: 'sup-2', viewValue: 'Suporte'}
  ];

  //AREA
  funcao: Funcao[] = [
    
    {value: 'des-1', viewValue: 'Desenvolvedor'},
    {value: 'sup-2', viewValue: 'Suporte Técnico'}
  ];

  //TABELA

  displayedColumns: string[] = ['colaborador', 'area', 'funcao', 'tiporisco', 'risco', 'periodico'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
