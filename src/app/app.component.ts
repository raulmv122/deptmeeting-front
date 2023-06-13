import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';
import { Empleado } from './clases/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DeptMeeting';
  empleadosDesloggeados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  desloggearEmpleados(): void {
    this.empleadoService.empleadosDesloggeados()
      .subscribe(
        empleados => {
          this.empleadosDesloggeados = empleados;
          this.router.navigate(['/home']);
        },
        error => {
        }
      );
  }
}
