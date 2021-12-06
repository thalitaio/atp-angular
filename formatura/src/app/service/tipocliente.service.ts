import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService {
  private listaTipos:any[];

  constructor() {
    this.listaTipos = [];
  }

  salvar(tipoCliente:any):void{

    this.listaTipos.push(tipoCliente);
  }

  listar():any[]{
    return this.listaTipos;
  }
}
