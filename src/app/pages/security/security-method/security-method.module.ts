import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityMethodPageRoutingModule } from './security-method-routing.module';

import { SecurityMethodPage } from './security-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityMethodPageRoutingModule
  ],
  declarations: [SecurityMethodPage]
})
export class SecurityMethodPageModule {}
