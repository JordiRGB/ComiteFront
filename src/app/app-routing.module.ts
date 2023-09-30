import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagInicioComponent } from './componentes/pag-inicio/pag-inicio.component';
import { JefesdecarreraComponent } from './componentes/jefesdecarrera/jefesdecarrera.component';


const routes: Routes = [
  { path: '', component: PagInicioComponent },
  { path: '', component: JefesdecarreraComponent },
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
