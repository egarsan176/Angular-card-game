import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.css']
})
export class InputBusquedaComponent implements OnInit {

   //el @OutPut me permite enviar el evento a otro lugar
  @Output() onEnter: EventEmitter<string> = new EventEmitter();  

  inputBusqueda : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTematica(){
    this.onEnter.emit(this.inputBusqueda);
  }
}
