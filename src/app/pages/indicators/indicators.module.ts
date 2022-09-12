import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorsPageRoutingModule } from './indicators-routing.module';

import { IndicatorsPage } from './indicators.page';
import {HeaderModule} from '../../components/app/header/header.module';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorsPageRoutingModule,
		HeaderModule,
		ComponentsModule,
		PipesModule
	],
  declarations: [IndicatorsPage]
})
export class IndicatorsPageModule {}
