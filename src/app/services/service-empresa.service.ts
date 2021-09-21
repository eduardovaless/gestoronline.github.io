
import { environment } from 'src/environments/environment.prod';
import { DadosEmpresa } from './../template/dadosempresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpresaService {

  apiURL: string = environment.apiURL + '/datasnap/rest/TEntityController/empresa';

  constructor(
    private http: HttpClient 
  ) { }


  //Get   

  getClinica(){
    return this.http.get<DadosEmpresa>(this.apiURL);
  }

}
