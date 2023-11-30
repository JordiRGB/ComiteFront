import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './componentes/pag-inicio/pag-inicio.component';
import { JefeiscComponent } from './componentes/jefeisc/jefeisc.component';
import { PapeleraComponent } from './componentes/papelera/papelera.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';

const routes: Routes = [
  { path: 'inicio', component: PagInicioComponent },
  { path: 'jefeisc', component: JefeiscComponent},
  { path: 'papelera', component: PapeleraComponent},
  { path: 'administrador', component: AdministradorComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
