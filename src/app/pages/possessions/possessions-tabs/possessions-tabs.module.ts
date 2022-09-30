import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PossessionsTabsPageRoutingModule } from './possessions-tabs-routing.module';

import { PossessionsTabsPage } from './possessions-tabs.page';
import {HeaderModule} from '../../../components/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PossessionsTabsPageRoutingModule,
	  HeaderModule
  ],
  declarations: [PossessionsTabsPage]
})
export class PossessionsTabsPageModule {}
