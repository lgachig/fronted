import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-pruebas',
  imports: [MatRadioModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent {
  private router = inject(Router);
  quizForm: FormGroup = new FormGroup({});
  datosRecibidos: any;
  puntuacion: number = -1;
  respuestasSeleccionadas: string[] = [];

  constructor(private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['data']) {
      this.datosRecibidos = navigation.extras.state['data'];
    }
    this.quizForm = this.fb.group({});
    this.datosRecibidos.preguntas.forEach((pregunta: any, index: any) => {
      const control = this.fb.control('');
      this.quizForm.addControl(`pregunta${index}`, control);
    });
  }

  verificarRespuestas() {
    this.puntuacion = 0;
    this.datosRecibidos.preguntas.forEach((pregunta: any, index: any) => {
      const respuestaSeleccionada = this.quizForm.get(`pregunta${index}`)?.value;
      if (respuestaSeleccionada === pregunta.respuesta_correcta) {
        this.puntuacion++;
      }
    });
  }

}
