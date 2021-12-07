import { TipoCliente } from './../model/TipoCliente';
import { TipoclienteService } from './../service/tipocliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientenews-create',
  templateUrl: './clientenews-create.component.html',
  styleUrls: ['./clientenews-create.component.css']
})
export class ClientenewsCreateComponent implements OnInit {

  tipoCliente = {} as TipoCliente;

  constructor(private tipoclienteService:TipoclienteService) {

  }

  ngOnInit(): void {
  }

  salvar(){
    this.tipoclienteService.salvar(this.tipoCliente).subscribe((msg)=>{
    console.log(msg)
    this.limpar();
    });
  }

  private limpar(){
    this.tipoCliente = {} as TipoCliente;
  }

}
