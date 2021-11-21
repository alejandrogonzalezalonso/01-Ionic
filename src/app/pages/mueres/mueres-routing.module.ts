import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MueresPage } from './mueres.page';

const routes: Routes = [
  {
    path: '',
    component: MueresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MueresPageRoutingModule {}
