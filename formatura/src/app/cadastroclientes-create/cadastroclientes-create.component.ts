import { Clientes } from './../model/clientes';
import { CadastroclientesService } from './../service/cadastroclientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroclientes-create',
  templateUrl: './cadastroclientes-create.component.html',
  styleUrls: ['./cadastroclientes-create.component.css']
})
export class CadastroclientesCreateComponent implements OnInit {

  cliente = {} as Clientes;

  constructor(private cadastroclientesService:CadastroclientesService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.cadastroclientesService.salvar(this.cliente).subscribe((msg)=>{
      console.log(msg)
      this.limpar();
      });
    }

  private limpar(){
    this.cliente = {} as Clientes;
  }
}
