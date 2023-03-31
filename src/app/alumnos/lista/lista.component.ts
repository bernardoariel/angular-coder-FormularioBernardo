import { Component, Input } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input()
  estudiantes: Estudiante[] = [];

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }

}
