import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  imports: [],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {
  preguntas: { texto: string }[] = []; // Inicializar como un arreglo vacío

  constructor() {}

  ngOnInit(): void {
    // Simular datos iniciales (puedes reemplazar esto con una llamada a un servicio)
    this.preguntas = [
      { texto: '¿Qué es Angular?' },
      { texto: '¿Cómo funciona el binding en Angular?' }
    ];
  }
}
