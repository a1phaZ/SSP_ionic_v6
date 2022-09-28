import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkuRatingPageRoutingModule } from './aku-rating-routing.module';

import { AkuRatingPage } from './aku-rating.page';
import {ChartsModule} from '../../../components/charts/charts.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AkuRatingPageRoutingModule,
		ChartsModule
	],
  declarations: [AkuRatingPage]
})
export class AkuRatingPageModule {}
