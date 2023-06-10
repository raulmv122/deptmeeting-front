import { Cita } from "./cita";

export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    password: string;
    email: string;
    rol: string;
    citas: Cita[];
    loggeado: boolean;
}
