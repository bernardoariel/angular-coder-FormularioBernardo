import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/interfaces/estudiante';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormularioComponent implements OnInit {

  formulario!: FormGroup;
  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]
    )
  apellidoControl = new FormControl(
  '',
  [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(30)
  ])
  emailControl = new FormControl( '',
  [
    Validators.required,
    Validators.email,
  ])
  @Output() agregarEstudiante = new EventEmitter<Estudiante>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email:  this.emailControl
    });
  }

  onSubmit() {
    if (this.formulario.invalid) return
    const estudiante: Estudiante = {
      id: this.generarId(),
      nombre: this.nombreControl.value,
      apellido: this.apellidoControl.value,
      email: this.emailControl.value
    };
    this.agregarEstudiante.emit(estudiante);
    this.formulario.reset();
  }

  generarId(): number {
    // Generar un ID aleatorio entre 1 y 10000
    return Math.floor(Math.random() * 10000) + 1;
  }

}
