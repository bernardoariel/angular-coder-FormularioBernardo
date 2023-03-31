import { Component } from '@angular/core';
import { Estudiante } from './interfaces/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalVisible: boolean = false;
  estudiantes: Estudiante[] = [ {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    email: "juanperez@example.com"
  },
  {
    id: 2,
    nombre: "María",
    apellido: "González",
    email: "mariagonzalez@example.com"
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "López",
    email: "pedrolopez@example.com"
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Sánchez",
    email: "anasanchez@example.com"
  },
  {
    id: 5,
    nombre: "Luis",
    apellido: "García",
    email: "luisgarcia@example.com"
  }];

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }
  mostrarModal() {
    this.modalVisible = true;
  }
}
