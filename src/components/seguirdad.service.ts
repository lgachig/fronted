import { Usuario } from "../components/user.component";
import { LoginData } from "../components/login.component";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class SeguridadService {
  private usu: Usuario | null;

  seguridadCambio = new Subject<boolean>();

  constructor(private router:Router) {
    this.usu = null;
  }

  registrarUsuario(usuario: Usuario) {
    this.usu = {
      id: Math.round(Math.random() * 1000).toString(),
      name: usuario.name,
      lname: usuario.lname,
      age: usuario.age,
      mail: usuario.mail,
      password: usuario.password
    };
    this.seguridadCambio.next(true);
  }

  login(loginData: LoginData) {
    this.usu = {
      id: '',
      name: '',
      lname: '',
      age: 0,
      mail: loginData.mail,
      password: loginData.password
    };
    this.seguridadCambio.next(true);
    this.router.navigate(['/home']);
  }

  exitSesion() {
    this.usu = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['/login']);
  }

  getUsuario() {
    return this.usu;
  }
}
