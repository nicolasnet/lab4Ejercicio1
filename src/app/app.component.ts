import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1';
  edadUno:number;
  edadDos:number;
  suma:number;
  promedio:number;

  LimpiarDatos(){
    this.edadUno= 0;
    this.edadDos= 0;
    this.suma = 0;
    this.promedio = 0;
  }

  Calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma/2;
  }

}