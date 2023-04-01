import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges {

  @Input()
  estudiantes: Estudiante[] = [];
  constructor(private cd: ChangeDetectorRef) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['estudiantes'] && changes['estudiantes'].currentValue) {
      console.log('La lista de estudiantes ha cambiado:', changes['estudiantes'].currentValue);
      // aquí puedes agregar la lógica para actualizar la vista
      this.cd.detectChanges();
    }
  }


}
