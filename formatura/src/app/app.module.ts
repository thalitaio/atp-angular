import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientenewsListaComponent } from './clientenews-lista/clientenews-lista.component';
import { ClientenewsCreateComponent } from './clientenews-create/clientenews-create.component';
import { CadastroclientesListaComponent } from './cadastroclientes-lista/cadastroclientes-lista.component';
import { CadastroclientesCreateComponent } from './cadastroclientes-create/cadastroclientes-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientenewsListaComponent,
    ClientenewsCreateComponent,
    CadastroclientesListaComponent,
    CadastroclientesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
