import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MueresPageRoutingModule } from './mueres-routing.module';

import { MueresPage } from './mueres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MueresPageRoutingModule
  ],
  declarations: [MueresPage]
})
export class MueresPageModule {}
