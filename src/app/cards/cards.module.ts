import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { InputBusquedaComponent } from './input-busqueda/input-busqueda.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GameCardComponent,
    InputBusquedaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GameCardComponent,
    InputBusquedaComponent
  ]

})
export class CardsModule { }
