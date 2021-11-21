import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  dificultad: string;
  palabra: string;
  images: Array<string>;
  palabraEscondida: string;
  intentos: number;
  posImagen: string;
  letraCorrecta: boolean;
  cont: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataservice: DataService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.dificultad) {
        this.dificultad = params.dificultad;
      }
    });
  }

  ngOnInit() {
    this.cont = 0;
    this.palabra = this.dataservice.cogerPalabra(this.dificultad);
    this.images = [
      '../../../assets/img/fallo1.PNG',
      '../../../assets/img/fallo2.PNG',
      '../../../assets/img/fallo3.PNG',
      '../../../assets/img/fallo4.PNG',
      '../../../assets/img/fallo5.PNG',
      '../../../assets/img/fallo6.PNG',
    ];
    this.palabraEscondida = this.palabra;

    this.intentos = 0;

    this.posImagen = this.images[0];
    this.letraCorrecta = false;

    var auxArray = this.palabra.split('');

    for (var i = 0; i < auxArray.length; i++) {
      auxArray[i] = '_';
    }
    this.palabra = auxArray.join(' ');
    console.log(this.palabraEscondida + ' palabra oculta');
    console.log(this.palabra + ' palabra');
  }

  clickLetra(letra, id) {
    this.letraCorrecta = false;
    console.log(this.cont);

    document.getElementById(id).setAttribute('disabled', 'true');
    let palabraTransformadaArray = this.palabra.split(' ');
    for (let i = 0; i < this.palabraEscondida.length; i++) {
      if (this.palabraEscondida[i] === letra) {
        palabraTransformadaArray[i] = letra;
        this.cont++;
        this.letraCorrecta = true;
      }
      this.palabra = palabraTransformadaArray.join(' ');
    }
    if (this.letraCorrecta === false) {
      this.intentos++;
      if (this.intentos >= 6) {
        this.mueres();
      } else {
        this.siguienteImagen(this.intentos);
      }
    }
    if (this.cont === this.palabraEscondida.length) {
      console.log('HAS PASADO A VIVES');
      this.vives();
    }
  }
  vives() {
    let navigationExtras: NavigationExtras = {
      queryParams: { dificultad: this.dificultad },
    };
    this.router.navigate(['vives'], navigationExtras);
  }

  mueres() {
    let navigationExtras: NavigationExtras = {
      queryParams: { dificultad: this.dificultad },
    };
    this.router.navigate(['mueres'], navigationExtras);
  }
  siguienteImagen(cantidadIntentos) {
    this.posImagen = this.images[cantidadIntentos];
  }
}
