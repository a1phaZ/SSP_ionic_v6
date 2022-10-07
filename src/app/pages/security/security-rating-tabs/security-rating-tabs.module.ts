import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityRatingTabsPageRoutingModule } from './security-rating-tabs-routing.module';

import { SecurityRatingTabsPage } from './security-rating-tabs.page';
import {HeaderModule} from '../../../components/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityRatingTabsPageRoutingModule,
	  HeaderModule
  ],
  declarations: [SecurityRatingTabsPage]
})
export class SecurityRatingTabsPageModule {}
