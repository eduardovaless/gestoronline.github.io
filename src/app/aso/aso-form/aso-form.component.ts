import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  guia: number;
  data: string;
  colaborador: string;
  area: string;
  funcao: string;
  tipoatend: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { guia: 1, data: '15/09/2021', colaborador: 'Eduardo Vales', area: 'Desenvolvimento', funcao: 'Analista de Sistemas', tipoatend: 'Periodico', status: 'Aberto' },
  { guia: 2, data: '15/09/2021', colaborador: 'Benjamim Estrela Vales Santos', area: 'Suporte', funcao: 'Suporte Tecnico', tipoatend: 'Periodico', status: 'Fechado' }

];

@Component({
  selector: 'app-aso-form',
  templateUrl: './aso-form.component.html',
  styleUrls: ['./aso-form.component.css']
})
export class AsoFormComponent implements OnInit {

  displayedColumns: string[] = ['guia', 'data', 'colaborador', 'area', 'funcao', 'tipoatend', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
