import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    ActualizarEmpleadoComponent,
    HomePageComponent,
    ListarCitasComponent,
    CrearCitaComponent,
    EditarCitaComponent,
    CalendarioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  