import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListaComponent
  ]

})
export class AlumnosModule { }
