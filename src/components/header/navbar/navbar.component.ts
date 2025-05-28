import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguirdad.service';
import { NgIf } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, NgIf, RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  statusUser : boolean = false;
  usuarioSubs: Subscription | undefined;

  constructor(private seguirdadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.usuarioSubs=this.seguirdadServicio.seguridadCambio.subscribe(status =>{
      this.statusUser = status;
    })
  }

  exitSesion(){
    this.seguirdadServicio.exitSesion();
  }
}
