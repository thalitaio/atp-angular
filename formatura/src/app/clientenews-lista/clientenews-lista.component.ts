import { TipoclienteService } from './../service/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientenews-lista',
  templateUrl: './clientenews-lista.component.html',
  styleUrls: ['./clientenews-lista.component.css']
})
export class ClientenewsListaComponent implements OnInit {
  lista:any[]
  constructor(private TipoclienteService:TipoclienteService) {
    this.lista = [];
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.TipoclienteService.listar();
  }
}
