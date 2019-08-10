import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DestinoViagemComponent } from './destino-viagem/destino-viagem.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DestinoViagemComponent, ListaDestinosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
