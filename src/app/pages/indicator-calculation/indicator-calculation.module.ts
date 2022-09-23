import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorCalculationPageRoutingModule } from './indicator-calculation-routing.module';

import { IndicatorCalculationPage } from './indicator-calculation.page';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorCalculationPageRoutingModule,
		PipesModule
	],
  declarations: [IndicatorCalculationPage]
})
export class IndicatorCalculationPageModule {}
