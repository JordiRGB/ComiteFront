import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagInicioComponent } from './componentes/pag-inicio/pag-inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { JefeiscComponent } from './componentes/jefeisc/jefeisc.component';
import { PapeleraComponent } from './componentes/papelera/papelera.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    PagInicioComponent,
    JefeiscComponent,
    PapeleraComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
