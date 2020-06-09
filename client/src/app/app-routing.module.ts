import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EspecialidadListComponent} from './components/especialidad-list/especialidad-list.component';
import {PacienteComponent} from './components/paciente/paciente.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {TiposComponent} from './components/tipos/tipos.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'especialidades',
    component: EspecialidadListComponent
  },
  {
    path:'pacientes',
    component:PacienteComponent
  },
  {
    path:'tipos',
    component:TiposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
