import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorDetailsPageRoutingModule } from './indicator-details-routing.module';

import { IndicatorDetailsPage } from './indicator-details.page';
import {HeaderModule} from '../../components/app/header/header.module';
import {ComponentsModule} from '../../components/components.module';
import {DetailsModule} from '../../components/indicator/details/details.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorDetailsPageRoutingModule,
		HeaderModule,
		ComponentsModule,
		DetailsModule
	],
  declarations: [IndicatorDetailsPage]
})
export class IndicatorDetailsPageModule {}
