import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InDevelopPageRoutingModule } from './in-develop-routing.module';

import { InDevelopPage } from './in-develop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InDevelopPageRoutingModule
  ],
  declarations: [InDevelopPage]
})
export class InDevelopPageModule {}
