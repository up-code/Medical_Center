import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadListComponent } from './components/especialidad-list/especialidad-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

import {EspecialidadService} from './services/especialidad.service';
import { PacienteComponent } from './components/paciente/paciente.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TiposComponent } from './components/tipos/tipos.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadListComponent,
    NavigationComponent,
    FooterComponent,
    PacienteComponent,
    InicioComponent,
    TiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EspecialidadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
