import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './components/repositorio.component';


@NgModule({
  declarations: [
    RepositorioComponent
  ],
  imports: [
    CommonModule,
    RepositorioRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RepositorioModule { }
