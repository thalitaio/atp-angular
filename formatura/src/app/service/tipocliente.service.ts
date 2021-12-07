import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoCliente } from './../model/TipoCliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService {
  private url:string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:8082/api/tipocliente";
  }

  salvar(tipoCliente:TipoCliente):Observable<string>{
    return this.httpClient.post(this.url, tipoCliente, {responseType: 'text'});
  }

  listar():Observable<TipoCliente[]>{
    return this.httpClient.get<TipoCliente[]>(this.url);
  }
}
