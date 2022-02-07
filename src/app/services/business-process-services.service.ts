import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BusinessProcess } from "../models/businessProcess.entity";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessProcessServicesService {

  private urlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) {

  }

  // TODO: Agregar entidad que represente un fallo
  GetAllBussinesProcess(): Observable<BusinessProcess[]>{
    return this.http.get<BusinessProcess[]>(`${this.urlBase}/BusinessProcess`);
  }
}
