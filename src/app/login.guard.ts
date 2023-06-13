import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EmpleadoService } from './empleado.service';
import { em } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  empleadoLoggeado: boolean = false;

  constructor(private empleadoService: EmpleadoService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.empleadoService.comprobarSiHayEmpleadoLoggeado().pipe(
      map((data: boolean) => {
        if (data) {
          return true;
        } else {
          alert("Algún administrador debe estar loggeado para acceder a esta página.");
          return this.router.parseUrl('/home');
        }
      })
    );
  }
  

}
