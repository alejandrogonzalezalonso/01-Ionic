import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'juego',
    loadChildren: () =>
      import('./pages/juego/juego.module').then((m) => m.JuegoPageModule),
  },
  {
    path: 'vives',
    loadChildren: () =>
      import('./pages/vives/vives.module').then((m) => m.VivesPageModule),
  },
  {
    path: 'mueres',
    loadChildren: () =>
      import('./pages/mueres/mueres.module').then((m) => m.MueresPageModule),
  },  {
    path: 'dificultad',
    loadChildren: () => import('./pages/dificultad/dificultad.module').then( m => m.DificultadPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
