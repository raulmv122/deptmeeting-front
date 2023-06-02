import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { Calendar } from 'primeng/calendar';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path : 'home',component : HomePageComponent},
  {path : 'citas',component : ListarCitasComponent},
  {path : 'crear-cita',component : CrearCitaComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'actualizar-cita/:id', component : EditarCitaComponent},
  {path : 'calendario',component : CalendarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
