import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AlumnosModule,
    SharedModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
