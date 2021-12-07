import { AppComponent } from './app-component/app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ClientenewsListaComponent } from './clientenews-lista/clientenews-lista.component';
import { ClientenewsCreateComponent } from './clientenews-create/clientenews-create.component';
import { CadastroclientesListaComponent } from './cadastroclientes-lista/cadastroclientes-lista.component';
import { CadastroclientesCreateComponent } from './cadastroclientes-create/cadastroclientes-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
