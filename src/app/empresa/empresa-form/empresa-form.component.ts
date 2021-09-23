import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  area: string;
  qtd: number;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {area: 'Desenvolvimento', qtd: 2},
  {area: 'Suporte', qtd: 2}

];


export interface PeriodicElementFuncao {
  funcao: string;
  qtdfuncao: number;  
}
const ELEMENT_DATAFUNCAO: PeriodicElementFuncao[] = [
  {funcao: 'Analista de Sistema', qtdfuncao: 2},
  {funcao: 'Suporte Técnico', qtdfuncao: 2}

];


export interface PeriodicElementRisco {
  tipo: string;
  risco: string;  
}
const ELEMENT_DATARISCO: PeriodicElementRisco[] = [
  {tipo: 'Ergonomico', risco: 'Postura Inadequada'},
  {tipo: 'Físico', risco: 'Fratura'}

];



@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  displayedColumns: string[] = ['area','qtd'];
  dataSource = ELEMENT_DATA;

  displayedColumnsFuncao: string[] = ['funcao', 'qtdfuncao'];
  dataSourceFuncao = ELEMENT_DATAFUNCAO;

  displayedColumnsRisco: string[] = ['tipo', 'risco'];
  dataSourceRisco = ELEMENT_DATARISCO;

  constructor() { }

  ngOnInit(): void {
  }

}
