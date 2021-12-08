import { HomeComponent } from './home/home/home.component';
import { ClientenewsCreateComponent } from './clientenews-create/clientenews-create.component';
import { ClientenewsListaComponent } from './clientenews-lista/clientenews-lista.component';
import { CadastroclientesCreateComponent } from './cadastroclientes-create/cadastroclientes-create.component';
import { CadastroclientesListaComponent } from './cadastroclientes-lista/cadastroclientes-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'cliente', component: CadastroclientesListaComponent},
  { path: 'cliente/cadastrar', component: CadastroclientesCreateComponent},
  { path: 'tipo-cliente', component: ClientenewsListaComponent},
  { path: 'tipo-cliente/cadastrar', component: ClientenewsCreateComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
