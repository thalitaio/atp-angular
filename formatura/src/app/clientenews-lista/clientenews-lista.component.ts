import { TipoCliente } from './../model/TipoCliente';
import { TipoclienteService } from './../service/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientenews-lista',
  templateUrl: './clientenews-lista.component.html',
  styleUrls: ['./clientenews-lista.component.css']
})
export class ClientenewsListaComponent implements OnInit {
  lista:TipoCliente[]
  constructor(private TipoclienteService:TipoclienteService) {
    this.lista = [];
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.TipoclienteService.listar().subscribe((tipocliente)=>this.lista=tipocliente);
  }
}
