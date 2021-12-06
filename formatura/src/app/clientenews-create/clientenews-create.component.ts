import { TipoclienteService } from './../service/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientenews-create',
  templateUrl: './clientenews-create.component.html',
  styleUrls: ['./clientenews-create.component.css']
})
export class ClientenewsCreateComponent implements OnInit {

  id:number = 0;
  ano_cadastro:number = 0;
  status:string = "";

  constructor(private tipoclienteService:TipoclienteService) {

  }

  ngOnInit(): void {
  }

  salvar(){
    let tipoCliente = {
      "id": this.id,
      "ano_cadastro": this.ano_cadastro,
      "status": this.status
    }
    console.log(tipoCliente)
    this.tipoclienteService.salvar(tipoCliente);
    this.limpar();
  }

  private limpar(){
    this.id = 0;
    this.ano_cadastro = 0;
    this.status = "";
  }

}
