import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorDynamicsPageRoutingModule } from './indicator-dynamics-routing.module';

import { IndicatorDynamicsPage } from './indicator-dynamics.page';
import {ChartsModule} from '../../components/charts/charts.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorDynamicsPageRoutingModule,
		ChartsModule
	],
	declarations: [IndicatorDynamicsPage]
})
export class IndicatorDynamicsPageModule {}
