import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkuCrisisPageRoutingModule } from './aku-crisis-routing.module';

import { AkuCrisisPage } from './aku-crisis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkuCrisisPageRoutingModule
  ],
  declarations: [AkuCrisisPage]
})
export class AkuCrisisPageModule {}
