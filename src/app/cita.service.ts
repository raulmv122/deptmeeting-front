import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
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
    return this.httpClient.post(`${this.baseURL}/${idEmpleado}`, cita);
  }

  actualizarCita(id: number, cita: Cita): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, cita);
  }
  
  obtenerCitaPorId(id: number): Observable<Cita> {
    return this.httpClient.get<Cita>(`${this.baseURL}/${id}`);
  }

  eliminarCita(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`).pipe(
    );
  }

  
    

}
