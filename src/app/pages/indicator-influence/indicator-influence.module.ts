import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorInfluencePageRoutingModule } from './indicator-influence-routing.module';

import { IndicatorInfluencePage } from './indicator-influence.page';
import {ComponentsModule} from '../../components/components.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorInfluencePageRoutingModule,
		ComponentsModule,
		PipesModule
	],
  declarations: [IndicatorInfluencePage]
})
export class IndicatorInfluencePageModule {}
