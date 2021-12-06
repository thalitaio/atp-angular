import { CadastroclientesService } from './../service/cadastroclientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroclientes-lista',
  templateUrl: './cadastroclientes-lista.component.html',
  styleUrls: ['./cadastroclientes-lista.component.css']
})
export class CadastroclientesListaComponent implements OnInit {
  lista:any[]
  constructor(private cadastroclienteService:CadastroclientesService) {
    this.lista = [];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.cadastroclienteService.listar();
  }
}
