import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() estudiantes: Estudiante[]=[];
  @Output() eliminarEstudiante = new EventEmitter<number>();

  eliminarEstudianteFc(id: number) {
    this.eliminarEstudiante.emit(id);
  }
}
