import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  codigo: number;
  descricao: string;
  quantidade: number;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 10101012, descricao: 'HEMOGRAMA COMPLETO', quantidade: 1},
  {codigo: 10101012, descricao: 'AUDIOMETRIA', quantidade: 1}

];

@Component({
  selector: 'app-autorizacao-formulario',
  templateUrl: './autorizacao-formulario.component.html',
  styleUrls: ['./autorizacao-formulario.component.css']
})
export class AutorizacaoFormularioComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'quantidade'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
