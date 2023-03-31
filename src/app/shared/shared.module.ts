import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    TablaComponent,
    FormularioComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TablaComponent,
    FormularioComponent,
    ModalComponent
  ]
})
export class SharedModule { }
