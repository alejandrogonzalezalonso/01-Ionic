import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mueres',
  templateUrl: './mueres.page.html',
  styleUrls: ['./mueres.page.scss'],
})
export class MueresPage implements OnInit {
  dificultad: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.dificultad) {
        this.dificultad = params.dificultad;
      }
    });
  }
  ngOnInit() {}

  cambioAJuego() {
    let navigationExtras: NavigationExtras = {
      queryParams: { dificultad: this.dificultad },
    };
    this.router.navigate(['juego'], navigationExtras);
  }
}
