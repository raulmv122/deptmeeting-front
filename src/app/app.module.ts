
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    ActualizarEmpleadoComponent,
    HomePageComponent,
    ListarCitasComponent,
    CrearCitaComponent,
    EditarCitaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  