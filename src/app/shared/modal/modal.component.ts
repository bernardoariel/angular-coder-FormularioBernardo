import  Swal  from 'sweetalert2';
import { Estudiante } from './../../interfaces/estudiante';
import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  isVisible:boolean = false;

  @Output()
  isVisibleChange = new EventEmitter<boolean>()

  @Output() agregarEstudiante = new EventEmitter<Estudiante>();
  @Output() estudianteCreado = new EventEmitter<Estudiante>();
  estudiante: any = {};


  onClose():void{
    // this.isVisible = false;
    this.isVisibleChange.emit(false);

  }
  onAgregarEstudiante(estudiante:Estudiante) {
     console.log('estudiante:::ON ', estudiante)
    this.agregarEstudiante.emit(estudiante);
    this.onClose()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha sido guardado el nuevo estudiante',
      showConfirmButton: false,
      timer: 1500
    })
  }
  cerrarModal(debeCerrar: boolean) {
    if (debeCerrar) {
      // código para cerrar el modal
      this.onClose()
    }
  }
}
