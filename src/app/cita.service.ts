import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cita } from "./clases/cita";
import { Empleado } from "./clases/empleado";


@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private baseURL = "http://localhost:8080/api/v1/citas";

  constructor(private httpClient : HttpClient) { }

   obtenerListaDeCitas():Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseURL}`);
  }

  crearCita(cita: Cita, idEmpleado: any): Observable<Object> {
    console.log(cita.fecha);
    const fechaISO = cita.fecha.toISOString(); 

    cita.fecha = new Date(fechaISO); 

    return this.httpClient.post(`${this.baseURL}/${idEmpleado}`, cita);

        
      
  }
  
  
}
