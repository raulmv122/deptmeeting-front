import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  static comprobarSiHayEmpleadoLoggeado() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  comprobarSiHayEmpleadoLoggeado():Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.baseURL}/administrador/loggeado`);
  }

  empleadosDesloggeados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}/desloggeado`);
  }
  

}
