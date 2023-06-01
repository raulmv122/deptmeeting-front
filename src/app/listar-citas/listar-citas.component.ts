import { Component } from '@angular/core';
import { Cita } from '../clases/cita';
import { Router } from '@angular/router';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent {

  citas:Cita[];

  constructor(private citaServicio:CitaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  private obtenerCitas(){
    this.citaServicio.obtenerListaDeCitas().subscribe(dato =>{
      this.citas = dato;
    });
  }

   crearCita(){
    this.router.navigate(['crear-cita']);
  }

  updateCita(id:number){
    console.log("ID de la cita a actualizar:", id);
    this.router.navigate(['actualizar-cita',id]);
  }

}
