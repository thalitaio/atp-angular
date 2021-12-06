import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroclientesService {
  private listaClientes:any[];
  constructor() {
    this.listaClientes = [];
  }

  salvar(cadastroClientes:any):void{

    this.listaClientes.push(cadastroClientes);
  }

  listar():any[]{
    return this.listaClientes;
  }
}
