import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { EditarCitaComponent } from './editar-cita/editar-cita.component';
import { LoginGuard } from './login.guard';



const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent, canActivate: [LoginGuard],},
  {path : 'home',component : HomePageComponent},
  {path : 'citas',component : ListarCitasComponent, canActivate: [LoginGuard],},
  {path : 'crear-cita',component : CrearCitaComponent, canActivate: [LoginGuard],},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent, canActivate: [LoginGuard],},
  {path : 'actualizar-cita/:id', component : EditarCitaComponent, canActivate: [LoginGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})

export class AppRoutingModule { }
