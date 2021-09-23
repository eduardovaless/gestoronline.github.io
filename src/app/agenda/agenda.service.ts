import { Agenda } from './agenda';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  apiURL: string = environment.apiURL + `/datasnap/rest/TCalendarController/agendaProfissional`;

  constructor(
    private http: HttpClient,
    
  ) { }

    getAgenda(idUnidade: number, idProfissional: string, currentDate: string){
      return this.http.get<Agenda[]>(`${this.apiURL}/${idUnidade}/${idProfissional}/${currentDate}`)
    }


}
