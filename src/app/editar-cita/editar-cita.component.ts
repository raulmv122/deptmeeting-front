import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../clases/cita';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.css']
})
export class EditarCitaComponent implements OnInit {
  cita: Cita = new Cita();
  errorExistenciaCita: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private citaService: CitaService
  ) { }

  ngOnInit() {
    const citaId = this.route.snapshot.params['id'];

    this.citaService.obtenerCitaPorId(citaId).subscribe(
      (cita: Cita) => {
        this.cita = cita;
      },
      error => {
        console.log('Error al cargar la cita:', error);
      }
    );
  }

  guardarCitaEditada() {
    if (this.cita && this.cita.id) {
      this.citaService.actualizarCita(this.cita.id, this.cita).subscribe(
        response => {
          console.log('Cita actualizada:', response);
          this.router.navigate(['/citas']);
        },
        error => {
          console.log('Error al actualizar la cita:', error);
          if (error && error.status === 409) {
            this.errorExistenciaCita = 'error';
          } else {
            this.errorExistenciaCita = 'Ya existe una cita programada para esa fecha y hora.';
          }
        }
      );
    } else {
      console.log('ID de la cita no válido');
    }
  }
}
