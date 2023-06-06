import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from '../cita.service';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../clases/empleado';
import { Cita } from '../clases/cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  empleados: Empleado[];
  nuevaCita: Cita = new Cita();

  constructor(private citaServicio: CitaService, private router: Router, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  guardarCita() {
    const empleadoIdSeleccionado = this.nuevaCita.empleado;
    if (empleadoIdSeleccionado) {
      console.log(this.nuevaCita.fecha);
      this.citaServicio.crearCita(this.nuevaCita, empleadoIdSeleccionado).subscribe(
        response => {
          console.log("Cita guardada exitosamente", response);
          this.router.navigate(['citas']);
        },
        error => {
          console.error("Error al guardar la cita", error);
        }
      );
    } else {
      console.error("Debe seleccionar un empleado");
    }
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }
}
