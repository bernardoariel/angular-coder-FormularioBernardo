import { Component } from '@angular/core';
import { Estudiante } from './interfaces/estudiante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo:string = 'Estudiantes de Angular que aprobaron el curso'
  cantAlumnos:number = 5;
  modalVisible: boolean = false;

  estudiantes: Estudiante[] = [ {
    id: 745,
    nombre: "Juan",
    apellido: "Pérez",
    email: "juanperez@example.com"
  },
  {
    id: 4531,
    nombre: "María",
    apellido: "González",
    email: "mariagonzalez@example.com"
  },
  {
    id: 1234,
    nombre: "Pedro",
    apellido: "López",
    email: "pedrolopez@example.com"
  },
  {
    id: 987,
    nombre: "Ana",
    apellido: "Sánchez",
    email: "anasanchez@example.com"
  },
  {
    id: 312,
    nombre: "Luis",
    apellido: "García",
    email: "luisgarcia@example.com"
  }];

  agregarEstudiante(estudiante: Estudiante) {
    console.log('estudiante::: en APCOMPONENT ', estudiante);
    this.estudiantes.push(estudiante);
  }
  mostrarModal() {
    this.modalVisible = true;
  }
  onAgregarEstudiante(estudiante: Estudiante) {
    console.log('estudiante::: en APP ', estudiante);
    this.agregarEstudiante(estudiante);
    this.cantAlumnos = this.estudiantes.length;
  }
  onEliminarEstudiante(id: number) {
    console.log('id::: ', id);
    // quiero obtener el estudiante con el id que me pasan
    const estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
    Swal.fire({
      title: `Esta seguro de eliminar a ${estudiante?.nombre} ${estudiante?.apellido}?`,
      text: "No podrás revertir este proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, lo borro!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Este registro fue eliminado.',
          'success'
        )
        this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
      }
    })


    this.cantAlumnos = this.estudiantes.length;
    // Realiza la lógica para eliminar el estudiante con el ID proporcionado
    // o enviar los datos a un servicio o componente secundario
  }
}

