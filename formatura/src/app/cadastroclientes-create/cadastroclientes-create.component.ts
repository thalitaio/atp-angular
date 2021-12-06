import { CadastroclientesService } from './../service/cadastroclientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroclientes-create',
  templateUrl: './cadastroclientes-create.component.html',
  styleUrls: ['./cadastroclientes-create.component.css']
})
export class CadastroclientesCreateComponent implements OnInit {

  id:number = 0;
  email:string = "";
  nome:string = "";
  sobrenome:string = "";

  constructor(private cadastroclientesService:CadastroclientesService) { }

  ngOnInit(): void {
  }

  salvar(){
    let cliente = {
      "id": this.id,
      "email":this.email,
      "nome":this.nome,
      "sobrenome":this.sobrenome
    }
    console.log(cliente)
    this.cadastroclientesService.salvar(cliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.email = "";
    this.nome= "";
    this.sobrenome = "";
  }

}
