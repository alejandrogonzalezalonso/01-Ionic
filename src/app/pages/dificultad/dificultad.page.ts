import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dificultad',
  templateUrl: './dificultad.page.html',
  styleUrls: ['./dificultad.page.scss'],
})
export class DificultadPage implements OnInit {
  dificultad: string;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  /*Función para cambiar de página llevando parámetros y cambio de página*/

  cambioAJuego() {
    let navigationExtras: NavigationExtras = {
      queryParams: { dificultad: this.dificultad },
    };
    this.router.navigate(['juego'], navigationExtras);
  }
}
