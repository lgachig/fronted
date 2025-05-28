import { Usuario } from "./user.model";
import { LoginData } from "./login.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import {environment } from './../../environments/enviroment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SeguridadService {
  baseURl = environment.apiUrl;

  private usu: Usuario | null;

  seguridadCambio = new Subject<boolean>();

  constructor(private router:Router, private http: HttpClient) {
    this.usu = null;
  }

  registrarUsuario(usuario: Usuario) {
    console.log(usuario);
    this.http.post<{success: boolean, data: string | Usuario, token: string}>(this.baseURl + '/register', usuario)
    .subscribe((res: any) => {
      if (res.success) {
        if (typeof res.data === 'string') {
          alert(res.data);
          return;
        }
        this.usu = {
          id: res.data.id,
          name: res.data.name,
          lname: res.data.lname,
          age: res.data.age,
          mail: res.data.mail,
          password: res.data.password
        };
        this.seguridadCambio.next(true);
        this.router.navigate(['/home']);
      }

    });
  }

  login(loginData: LoginData) {
    this.http.post<{success: boolean, data: string | Usuario, token: string}>(this.baseURl + '/login', loginData)
    .subscribe((res: any) => {
      if (res.success) {
        if (typeof res.data === 'string') {
          alert(res.data);
          return;
        }
        this.usu = {
          id: res.data.id,
          name: res.data.name,
          lname: res.data.lname,
          age: res.data.age,
          mail: res.data.mail,
          password: ""
        };
        this.seguridadCambio.next(true);
        this.router.navigate(['/home']);
      }

    });
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
