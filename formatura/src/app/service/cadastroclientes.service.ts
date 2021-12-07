import { HttpClient } from '@angular/common/http';
import { Clientes } from './../model/clientes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroclientesService {
  private url:string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:8082/api/cadastro";
  }

  salvar(cadastroClientes:Clientes):Observable<string>{
    return this.httpClient.post(this.url, cadastroClientes, {responseType: 'text'});
  }

  listar():Observable<Clientes[]>{
    return this.httpClient.get<Clientes[]>(this.url);
  }
}
