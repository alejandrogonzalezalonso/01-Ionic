import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dificultad: string;
  palabra: string;
  arrayFacil = ['PERRO', 'COCHE', 'CASA', 'MONO', 'CIUDAD'];
  arrayMedio = ['ORDENADOR', 'TELEVISION', 'OCEANO', 'AEROPUERTO'];
  arrayDificil = [
    'ESDRUJULA',
    'NIPON',
    'ERGO',
    'OCULTISMO',
    'SOCRATES',
    'ASTRONOMIA',
  ];

  constructor() {}

  cogerPalabra(dificultad) {
    if (dificultad == 'facil') {
      this.palabra =
        this.arrayFacil[Math.floor(Math.random() * this.arrayFacil.length)];
      return this.palabra;
    } else if (dificultad == 'medio') {
      this.palabra =
        this.arrayMedio[Math.floor(Math.random() * this.arrayMedio.length)];
      return this.palabra;
    } else {
      this.palabra =
        this.arrayDificil[Math.floor(Math.random() * this.arrayDificil.length)];
      return this.palabra;
    }
  }
}
