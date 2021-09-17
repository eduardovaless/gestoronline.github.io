import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  guia: number;
  data: string;
  colaborador: string;
  exame: string;
  datatend: string;
}

export interface PeriodicElementFicha {
  nome: string;
  nascimento: string;
  area: string;
  funcao: string;
  telefone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {guia: 1, data: '15/09/2021', colaborador: 'Eduardo Vales', exame: 'Demissional', datatend: '15/09/2021'},
    {guia: 2, data: '15/09/2021', colaborador: 'Benjamim Vales', exame: 'Demissional', datatend: '15/09/2021'}
  
];

const ELEMENT_DATAFICHA: PeriodicElementFicha[] = [
  {nome: 'Eduardo Vales', nascimento: '14/03/1996', area: 'Analista de Sistema', funcao: 'Desenvolvedor', telefone: '(71) 99999-9999'},
  {nome: 'Benjamim Vales', nascimento: '19/06/2020', area: 'Analista de Sistema', funcao: 'Desenvolvedor', telefone: '(71) 99999-9999'}
   
 ];


@Component({
  selector: 'app-autorizacao-form',
  templateUrl: './autorizacao-form.component.html',
  styleUrls: ['./autorizacao-form.component.css']
})
export class AutorizacaoFormComponent implements OnInit {
  backgroundColorToggle = "primary";

  displayedColumns: string[] = ['guia', 'data', 'colaborador', 'exame', 'datatend'];
  dataSource = ELEMENT_DATA;

  displayedColumnsFicha: string[] = ['nome', 'nascimento', 'area', 'funcao', 'telefone'];
  dataSourceFicha = ELEMENT_DATAFICHA;

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  openScheduleDialog(){
    this.router.navigate(["/autorizacao/form"])    
  }

}
