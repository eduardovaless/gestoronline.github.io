import { AgendaService } from './../agenda.service';
import { Observable } from 'rxjs';
import { Agenda } from './../agenda';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';

@Component({
  selector: 'app-agendamedica',
  templateUrl: './agendamedica.component.html',
  styleUrls: ['./agendamedica.component.css'],
  providers: [
    {provide: localePt, useValue: 'pt'},
  ]
})
export class AgendamedicaComponent implements OnInit {
  agenda: Agenda [] = [];
  selected: Date | null;
  backgroundColorToggle = "primary";
  idUnidade: number;
  idProfissional: string;
  dataAgenda: string;

  

  displayedColumns: string[] = ['status', 'hora', 'paciente', 'convenio', 'servico'];
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AgendaService

  ) {
    
    this.idUnidade= 1
    this.idProfissional= '19888'
    


   }

  ngOnInit(): void {

    this.searchScheduleProfessional();
  }
    //carregar agenda do medico logado

    searchScheduleProfessional(event?){//o evente é a data selecionado na agenda
     
      moment.locale('pt'); 
     
      let currentDate;
      
       //vai receber a data do dia ou a data selecionada
      if (event) {//se tiver o evento vamos jogar o evento nele se não colocamos a data do dia
        currentDate = moment(event).format('YYYY-MM-DD') //coloco no currentDate o evento da data já formatada no formato da api     
    }else{
      currentDate = moment().format('YYYY-MM-DD') //coloca a data do dia já formatada
    }
    
    

      this.service.getAgenda(this.idUnidade, this.idProfissional, currentDate)
      .subscribe(resposta => this.agenda = resposta);}
  

  openScheduleDialog(){
    this.router.navigate(["/autorizacao/form"])    
  }


  
}
