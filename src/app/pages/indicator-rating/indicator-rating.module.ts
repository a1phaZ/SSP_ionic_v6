import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorRatingPageRoutingModule } from './indicator-rating-routing.module';

import { IndicatorRatingPage } from './indicator-rating.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorRatingPageRoutingModule,
		ComponentsModule
	],
  declarations: [IndicatorRatingPage]
})
export class IndicatorRatingPageModule {}
