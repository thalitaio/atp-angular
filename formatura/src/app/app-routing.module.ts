import { ClientenewsCreateComponent } from './clientenews-create/clientenews-create.component';
import { ClientenewsListaComponent } from './clientenews-lista/clientenews-lista.component';
import { CadastroclientesCreateComponent } from './cadastroclientes-create/cadastroclientes-create.component';
import { CadastroclientesListaComponent } from './cadastroclientes-lista/cadastroclientes-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cliente', component: CadastroclientesListaComponent},
  { path: 'cliente/cadastrar', component: CadastroclientesCreateComponent},
  { path: 'tipo-cliente', component: ClientenewsListaComponent},
  { path: 'tipo-cliente/cadastrar', component: ClientenewsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
