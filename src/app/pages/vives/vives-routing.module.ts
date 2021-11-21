import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VivesPage } from './vives.page';

const routes: Routes = [
  {
    path: '',
    component: VivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VivesPageRoutingModule {}
