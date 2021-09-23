import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fatura: number;
  datafatura: string;
  dataemissao: string;
  previsao: string;
  status: string;
  valor: number; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { fatura: 1, datafatura: '15/09/2021', dataemissao: '15/09/2021', previsao: '18/10/2021', status: 'Em aberto', valor: 150 },
  { fatura: 2, datafatura: '15/09/2021', dataemissao: '15/09/2021', previsao: '18/10/2021', status: 'Pago', valor: 100  }

];

@Component({
  selector: 'app-fatura-form',
  templateUrl: './fatura-form.component.html',
  styleUrls: ['./fatura-form.component.css'],
  
    
})


export class FaturaFormComponent implements OnInit {

  displayedColumns: string[] = ['fatura', 'datafatura', 'dataemissao', 'previsao', 'status', 'valor'];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit(): void {
  }

}
